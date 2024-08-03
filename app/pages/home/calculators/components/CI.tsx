"use client";

import { useEffect, useState } from "react";
import Slider from "./Slider";
import { FaAngleDown } from "react-icons/fa6";
import { createINRString } from "@/app/utils/tools";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const CI = () => {
  // inputs
  const [principal, setPrincipal] = useState<number>(1000000);
  const [interest, setInterest] = useState<number>(5.5);
  const [frequency, setFrequency] = useState<
    "month" | "quarter" | "half" | "annual"
  >("quarter");
  const [time, setTime] = useState<number>(10);

  // outputs
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [ci, setCI] = useState<number>(0);

  // chart data
  const [pieData, setPieData] = useState<{ name: string; value: number }[]>([
    { name: "", value: 0 },
  ]);
  const [totalData, setTotalData] = useState<{ name: string; value: number }[]>(
    [{ name: "", value: 0 }]
  );

  // minmax values for inputs
  const [minMaxPrincipal, setMinMaxPrincipal] = useState<[number, number]>([
    100, 10000000,
  ]);
  const [minMaxInterest, setMinMaxInterest] = useState<[number, number]>([
    1.0, 50.0,
  ]);
  const [minMaxTime, setMinMaxTime] = useState<[number, number]>([1, 30]);

  // validators
  const [isPrincipal, setIsPrincipal] = useState<boolean>(false);
  const [isInterest, setIsInterest] = useState<boolean>(false);
  const [isTime, setIsTime] = useState<boolean>(false);

  // reset data
  function resetData() {
    // inputs reset
    // setPrincipal(0);
    // setInterest(0);
    // setTime(0);

    // outputs
    setCI(0);
    setTotalAmount(0);

    // chart data
    setPieData([{ name: "", value: 0 }]);
    setTotalData([{ name: "", value: 0 }]);
  }

  // handling frequency
  function handleFrequency(currFreq: "month" | "quarter" | "half" | "annual") {
    const frequencyOrder: ["month", "quarter", "half", "annual"] = [
      "month",
      "quarter",
      "half",
      "annual",
    ];

    const currFreqIndex = frequencyOrder.indexOf(currFreq);

    if (currFreqIndex == 0) {
      setFrequency(frequencyOrder[1]);
    } else if (currFreqIndex == 1) {
      setFrequency(frequencyOrder[2]);
    }
    if (currFreqIndex == 2) {
      setFrequency(frequencyOrder[3]);
    }
    if (currFreqIndex == 3) {
      setFrequency(frequencyOrder[0]);
    }
  }
  // calculating ci
  function calculateCI() {
    // A = P (1 + r/n)^(nt)
    // Where:
    // A = Accumulated value (final amount)
    // P = Principal amount (initial investment or loan)
    // r = Interest rate (annual percentage rate)
    // n = Number of times interest is compounded per year
    // t = Time period (years)

    const frequencyNumber: number =
      frequency == "annual"
        ? 1
        : frequency == "half"
        ? 2
        : frequency == "quarter"
        ? 4
        : 12;

    const rateFreq: number = interest / 100 / frequencyNumber;

    const result: number =
      principal * Math.pow(1 + rateFreq, frequencyNumber * time);

    setTotalAmount(result);
    setCI(result - principal);
  }

  // validating
  useEffect(() => {
    if (principal >= minMaxPrincipal[0] && principal <= minMaxPrincipal[1]) {
      setIsPrincipal(true);
      calculateCI();
    } else {
      setIsPrincipal(false);
      resetData();
    }
    if (interest >= minMaxInterest[0] && interest <= minMaxInterest[1]) {
      setIsInterest(true);
      calculateCI();
    } else {
      setIsInterest(false);
      resetData();
    }
    if (time >= minMaxTime[0] && time <= minMaxTime[1]) {
      setIsTime(true);
      calculateCI();
    } else {
      setIsTime(false);
      resetData();
    }
  }, [principal, interest, time, frequency]);

  // calculating based on validation
  useEffect(() => {
    if (isInterest && isPrincipal && isTime) {
      calculateCI();
    }
  }, [isInterest, isPrincipal, isTime]);

  // setting up chart data
  useEffect(() => {
    setPieData([
      { name: "Principal Amount", value: principal },
      { name: "Compound Interest", value: ci },
    ]);
    setTotalData([{ name: "Total Amount", value: totalAmount }]);
  }, [totalAmount, ci]);
  const PIEFILLS = ["#00C49F", "#FF8042"];

  return (
    <div className="w-full min-h-screen flex flex-col gap-2 justify-evenly dark:text-light">
      {/* heading */}
      <div className="w-full h-auto text-3xl font-medium text-center flex flex-col p-2 gap-1">
        <div className="w-full h-fit bg-[#F2F4F7] dark:bg-bodyDark dark:border-2 dark:border-[#F2F4F7] dark:border-solid">
          Compound Interest Calculator
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
        {/* frequency */}
        <div className="w-fit mx-auto h-auto flex flex-col gap-10">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">Compounding Frequency</div>
            <div
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark min-w-48 flex flex-row justify-between ring-[#00b386] text-[#00b386] items-center cursor-pointer`}
              onClick={() => handleFrequency(frequency)}
              title="Click to change Frequency"
            >
              {frequency == "annual" && <div>Yearly</div>}
              {frequency == "half" && <div>Half Yearly</div>}
              {frequency == "quarter" && <div>Quarterly</div>}
              {frequency == "month" && <div>Monthly</div>}
              <FaAngleDown />
            </div>
          </div>
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
          ${ci > 0 ? "text-[#00b386]" : "text-[#d64933]"}
          `}
            >
              {!isPrincipal || !isInterest || !isTime
                ? `#Input Error`
                : `₹ ${createINRString(Math.round(principal))}`}
            </div>
          </div>
          {/* interest amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1 dark:border-2 dark:border-[#F2F4F7] dark:border-solid">
            <div className="text-base md:text-lg">Compound Interest</div>
            <div
              className={`text-xl md:text-2xl font-medium
          ${ci > 0 ? "text-[#00b386]" : "text-[#d64933]"}
          `}
            >
              {!isTime || !isInterest || !isPrincipal
                ? "#Input Error"
                : `₹ ${createINRString(Math.round(ci))}`}
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
        <PieChart key={"CI Calculator"}>
          {/* principal & ci */}
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

export default CI;
