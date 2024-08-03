"use client";

import { useEffect, useState } from "react";
import Slider from "./Slider";
import { createINRString } from "@/app/utils/tools";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Text,
} from "recharts";

const SI = () => {
  // inputs
  const [principal, setPrincipal] = useState<number>(100000);
  const [interest, setInterest] = useState<number>(10.5);
  const [time, setTime] = useState<number>(10);

  // minmax values
  const [minMaxPrincipal, setMinMaxPrincipal] = useState<[number, number]>([
    100, 10000000,
  ]);
  const [minMaxInterest, setMinMaxInterest] = useState<[number, number]>([
    5.0, 30.0,
  ]);
  const [minMaxTime, setMinMaxTime] = useState<[number, number]>([1, 30]);

  // validations
  const [isPrincipal, setIsPrincipal] = useState<boolean>(false);
  const [isInterest, setIsInterest] = useState<boolean>(false);
  const [isTime, setIsTime] = useState<boolean>(false);

  // outputs
  const [si, setSI] = useState<number>(10000);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  // data format for pie chart
  const [pieData, setPieData] = useState<
    {
      name: string;
      value: number;
    }[]
  >([
    {
      name: "",
      value: 0,
    },
  ]);

  // total data
  const [totalData, setTotalData] = useState<
    {
      name: string;
      value: number;
    }[]
  >([
    {
      name: "",
      value: 0,
    },
  ]);

  // reset data
  function resetData() {
    setIsPrincipal(false);
    setSI(0);
    setTotalAmount(0);
    setPieData([
      {
        name: "",
        value: 0,
      },
      {
        name: "",
        value: 0,
      },
    ]);
    setTotalData([
      {
        name: "",
        value: 0,
      },
    ]);
  }
  // validating
  useEffect(() => {
    // principal validation
    if (principal >= minMaxPrincipal[0] && principal <= minMaxPrincipal[1]) {
      setIsPrincipal(true);
    } else {
      resetData();
    }
    // interest validation
    if (interest >= minMaxInterest[0] && interest <= minMaxInterest[1]) {
      setIsInterest(true);
    } else {
      resetData();
    }
    // time validation
    if (time >= minMaxTime[0] && time <= minMaxTime[1]) {
      setIsTime(true);
    } else {
      resetData();
    }
  }, [principal, interest, time]);
  // calculation
  // si
  useEffect(() => {
    // si = (p * r * t) / 100
    const result: number = (principal * interest * time) / 100;
    if (isPrincipal && isInterest && isTime) {
      setSI(result);
    }
  }, [principal, interest, time]);

  // total amount & pie data
  useEffect(() => {
    const result: number = principal + si;
    if (isPrincipal && isInterest && isTime) {
      setTotalAmount(result);

      const pieData: {
        name: string;
        value: number;
      }[] = [
        {
          name: "Principal Amount",
          value: principal,
        },
        {
          name: "Simple Interest",
          value: si,
        },
      ];
      setPieData(pieData);
    }
  }, [si]);

  // total data
  useEffect(() => {
    const totalData: {
      name: string;
      value: number;
    }[] = [
      {
        name: "Total Amount",
        value: totalAmount,
      },
    ];
    if (isPrincipal && isInterest && isTime) {
      setTotalData(totalData);
    }
  }, [totalAmount]);

  const PIEFILLS = ["#00C49F", "#FF8042"];

  return (
    <div className="w-full min-h-screen flex flex-col gap-2 justify-evenly dark:text-light">
      {/* heading */}
      <div className="w-full h-auto text-3xl font-medium text-center flex flex-col p-2 gap-1">
        <div className="w-full h-fit bg-[#F2F4F7] dark:bg-bodyDark dark:border-2 dark:border-[#F2F4F7] dark:border-solid">
          Simple Interest Calculator
        </div>
      </div>
      {/* inputs */}
      <div className="w-full h-auto flex flex-col px-2 gap-2">
        {/* principal */}
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">
              Principal <span className="text-xs">(₹)</span>
            </div>
            <input
              type="number"
              name=""
              id=""
              min={minMaxPrincipal[0]}
              max={minMaxPrincipal[1]}
              onChange={(e) => {
                let val = e.target.value;
                setPrincipal(+val);
              }}
              value={principal}
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark min-w-48  ${
                isPrincipal
                  ? "ring-[#00b386] text-[#00b386]"
                  : "ring-[#d64933] text-[#d64933]"
              }`}
            />
          </div>
          <Slider
            currentValue={principal}
            min={minMaxPrincipal[0]}
            max={minMaxPrincipal[1]}
            updateCurrent={(val: number | string) => setPrincipal(+val)}
            key={`SI Calculator Principal Input`}
            unit="inr"
          />
        </div>
        {/* rate */}
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">
              Interest Rate <span className="text-xs">(% p.a)</span>
            </div>
            <input
              type="text"
              name=""
              id=""
              min={minMaxInterest[0]}
              max={minMaxInterest[1]}
              onChange={(e) => {
                let val = e.target.value;
                setInterest(+val);
              }}
              value={interest}
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark min-w-48  ${
                isInterest
                  ? "ring-[#00b386] text-[#00b386]"
                  : "ring-[#d64933] text-[#d64933]"
              }`}
            />
          </div>
          <Slider
            currentValue={+interest}
            min={minMaxInterest[0]}
            max={minMaxInterest[1]}
            updateCurrent={(val: string | number) => setInterest(+val)}
            key={`SI Calculator Rate Input`}
            unit="interest"
          />
        </div>
        {/* time */}
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">
              Time Period <span className="text-xs">(years)</span>
            </div>
            <input
              type="number"
              name=""
              id=""
              min={minMaxTime[0]}
              max={minMaxTime[1]}
              onChange={(e) => {
                let val = e.target.value;
                setTime(+val);
              }}
              value={time}
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark min-w-48  ${
                isTime
                  ? "ring-[#00b386] text-[#00b386]"
                  : "ring-[#d64933] text-[#d64933]"
              }`}
            />
          </div>
          <Slider
            currentValue={time}
            min={minMaxTime[0]}
            max={minMaxTime[1]}
            updateCurrent={(val: number | string) => setTime(+val)}
            key={`SI Calculator Time Input`}
            unit="years"
          />
        </div>
      </div>
      {/* output */}
      <div className="mx-auto w-4/5 h-auto shadow-md flex flex-col gap-1">
        <div className="w-full h-auto flex flex-row gap-1">
          {/* principal amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1 dark:border-2 dark:border-[#F2F4F7] dark:border-solid">
            <div className="text-base md:text-lg">Principal Amount</div>
            <div
              className={`text-xl md:text-2xl font-medium
              ${si > 0 ? "text-[#00b386]" : "text-[#d64933]"}
              `}
            >
              {!isPrincipal || !isInterest || !isTime
                ? `#Input Error`
                : `₹ ${createINRString(Math.round(principal))}`}
            </div>
          </div>
          {/* interest amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1 dark:border-2 dark:border-[#F2F4F7] dark:border-solid">
            <div className="text-base md:text-lg">Simple Interest</div>
            <div
              className={`text-xl md:text-2xl font-medium
              ${si > 0 ? "text-[#00b386]" : "text-[#d64933]"}
              `}
            >
              {!isTime || !isInterest || !isPrincipal
                ? "#Input Error"
                : `₹ ${createINRString(Math.round(si))}`}
            </div>
          </div>
          {/* total amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1 dark:border-2 dark:border-[#F2F4F7] dark:border-solid">
            <div className="text-base md:text-lg">Total Amount</div>
            <div
              className={`text-xl md:text-2xl font-medium
              ${totalAmount > 0 ? "text-[#00b386]" : "text-[#d64933]"}
              `}
            >
              {!isTime || !isInterest || !isPrincipal
                ? "#Input Error"
                : `₹ ${createINRString(Math.round(totalAmount))}`}
            </div>
          </div>
        </div>
      </div>
      {/* loan visuals */}
      <ResponsiveContainer width={"100%"} height={300}>
        <PieChart key={"SI Calculator"}>
          {/* principal & si */}
          <Pie
            key={"SI Calculator - Principal & Interest Amount"}
            data={pieData}
            dataKey={"value"}
            nameKey={"name"}
            cx="50%"
            cy="50%"
            outerRadius={50}
            style={{
              width: "100%",
              height: "100%",
            }}
            // label={}
          >
            {/* ₹ */}
            {pieData.map(
              (dataPoint: { name: string; value: number }, index: number) => (
                <Cell
                  key={`${dataPoint.name}-${index}`}
                  fill={PIEFILLS[index % PIEFILLS.length]}
                />
              )
            )}
          </Pie>
          {/* Total amount */}
          <Pie
            key={"SI Calculator - Total Amount"}
            data={totalData}
            dataKey={"value"}
            nameKey={"name"}
            cx={"50%"}
            cy={"50%"}
            innerRadius={60}
            outerRadius={80}
            fill="#47b3ff"
            // label
          ></Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SI;
