"use client";
import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Slider } from ".";
import { createINRString } from "@/app/utils/tools";
import toast from "react-hot-toast";

export const EMI = () => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // principal
  const [loanInterest, setLoanInterest] = useState<string>("10.0"); // rate
  const [loanTenure, setLoanTenure] = useState<number>(10); // time
  const [emi, setEMI] = useState<number>(0); //emi
  const [interestAmount, setInterestAmount] = useState<number>(0); // interest amount
  const [totalAmount, setTotalAmount] = useState<number>(0); // total

  // minimum & maximum of data
  // [minimum, maximum]
  const [minmaxLA, setMinMaxLA] = useState<[number, number]>([100, 10000000]);
  const [minmaxLI, setMinMaxLI] = useState<[number, number]>([1.0, 30.0]);
  const [minmaxLT, setMinMaxLT] = useState<[number, number]>([1, 30]);

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

  // calculate based on inputs within the range of their
  const [isLA, setIsLA] = useState<boolean>(true);
  const [isLT, setIsLT] = useState<boolean>(true);
  const [isLI, setIsLI] = useState<boolean>(true);

  // calculating EMI
  function calculateEMI({
    loanAmount,
    loanInterest,
    loanTenure,
  }: {
    loanInterest: string | number;
    loanTenure: number;
    loanAmount: number;
  }): void {
    const ratePMP: number = +loanInterest / 12; // rate pa to rate pm
    const ratePM: number = ratePMP / 100;
    const tenureMonths: number = loanTenure * 12; // months in payment

    // parts of calculation
    const PxR: number = loanAmount * ratePM;
    const upR: number = Math.pow(1 + ratePM, tenureMonths);
    // calculating emi
    const calculatedEMI: number = (PxR * upR) / (upR - 1);

    setEMI(calculatedEMI);
  }

  // function for resetting calculated data
  function resetCalculatedData(): void {
    setEMI(0);
    setInterestAmount(0);
    setTotalAmount(0);
    setPieData([
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

  // setting totalAmount based on emi calculated
  useEffect(() => {
    if (emi > 0) {
      setTotalAmount(emi * loanTenure * 12);
    }
  }, [emi]);
  // setting interestAmount based on totalAmount
  useEffect(() => {
    if (totalAmount > 0) {
      // finding interest amount
      setInterestAmount(totalAmount - loanAmount);
      // entering it into totalData
      setTotalData([
        {
          name: "Total Amount",
          value: Math.round(totalAmount),
        },
      ]);
    }
  }, [totalAmount]);

  // creating data for pie chart
  useEffect(() => {
    const data: {
      name: string;
      value: number;
    }[] = [
      {
        name: "Principal Amount",
        value: Math.round(loanAmount),
      },
      {
        name: "Interest Amount",
        value: Math.round(interestAmount),
      },
    ];

    totalAmount > 0 && interestAmount > 0 ? setPieData(data) : null;
  }, [totalAmount, interestAmount]);

  // checking if the entered inputs are within the specified range
  // if not will show the error
  useEffect(() => {
    // loan amount
    if (loanAmount < minmaxLA[0] || loanAmount > minmaxLA[1]) {
      setIsLA(false);
      toast.error("Loan Amount is not within the range.");
      resetCalculatedData();
    } else {
      setIsLA(true);
    }
    // loan tenure
    if (loanTenure < minmaxLT[0] || loanTenure > minmaxLT[1]) {
      setIsLT(false);
      toast.error("Loan Tenure is not within the range.");
      resetCalculatedData();
    } else {
      setIsLT(true);
    }
    // loan interest
    // "+loanInterest" converts its type from string to number for comparison
    if (+loanInterest < minmaxLI[0] || +loanInterest > minmaxLI[1]) {
      setIsLI(false);
      toast.error("Loan Interest is not within the range.");
      resetCalculatedData();
    } else {
      setIsLI(true);
    }

    if (isLA && isLI && isLT) {
      calculateEMI({ loanAmount, loanInterest, loanTenure });
    }
  }, [loanAmount, loanInterest, loanTenure, isLA, isLI, isLT]);

  const PIEFILLS = ["#00C49F", "#FF8042"];
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 justify-evenly dark:text-light">
      {/* heading */}
      <div className="w-full h-auto text-3xl font-medium text-center">
        EMI Calculator
      </div>
      {/* emi calculation related inputs */}
      <div className="w-full h-auto flex flex-col px-2 gap-2">
        {/* principal (la) */}
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">
              Loan Amount <span className="text-xs">(₹)</span>
            </div>
            <input
              type="number"
              name="loanAmount"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark  ${
                isLA
                  ? "ring-[#00b386] text-[#00b386]"
                  : "ring-[#d64933] text-[#d64933]"
              }`}
            />
          </div>
          <Slider
            min={minmaxLA[0]}
            max={minmaxLA[1]}
            currentValue={loanAmount}
            updateCurrent={(val: number) => setLoanAmount(val)}
            unit="inr"
            key={"Range Slider Loan Amount"}
          />
        </div>
        {/* tenure (lt) */}
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">
              Loan Tenure <span className="text-xs">(years)</span>
            </div>
            <input
              type="number"
              name="loanTenure"
              id="loanTenure"
              value={loanTenure}
              onChange={(e) => setLoanTenure(parseInt(e.target.value))}
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark  ${
                isLT
                  ? "ring-[#00b386] text-[#00b386]"
                  : "ring-[#d64933] text-[#d64933]"
              }`}
            />
          </div>
          <Slider
            min={minmaxLT[0]}
            max={minmaxLT[1]}
            currentValue={loanTenure}
            updateCurrent={(val: number) => setLoanTenure(val)}
            unit="years"
            key={"Range Slider Loan Tenure"}
          />
        </div>
        {/* rate (li) */}
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex flex-row justify-between gap-2">
            <div className="text-xl">
              Interest Rate <span className="text-xs">(P.A)</span>
            </div>
            <input
              type="text"
              name="loanInterest"
              id="loanInterest"
              value={loanInterest}
              onChange={(e) => setLoanInterest(e.target.value)}
              className={`outline-none ring-2  px-2 rounded-sm bg-light dark:bg-bodyDark  ${
                isLI
                  ? "ring-[#00b386] text-[#00b386]"
                  : "ring-[#d64933] text-[#d64933]"
              }`}
            />
          </div>
          <Slider
            min={minmaxLI[0]}
            max={minmaxLI[1]}
            currentValue={+loanInterest}
            updateCurrent={(val: string) => setLoanInterest(val)}
            unit="interest"
            key={"Range Slider Loan Interest"}
          />
        </div>
      </div>
      {/* loan Details */}
      <div className="mx-auto w-4/5 h-auto shadow-md flex flex-col gap-1">
        <div className="w-full h-auto flex flex-row justify-between bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1">
          <div className="text-base md:text-lg">Monthly EMI</div>
          <div
            className={`text-xl md:text-2xl font-medium ${
              emi > 0 ? "text-[#00b386]" : "text-[#d64933]"
            }
            `}
          >
            {!isLA || !isLI || !isLT
              ? `#Input Error`
              : `₹ ${createINRString(Math.round(emi))}`}
          </div>
        </div>
        <div className="w-full h-auto flex flex-row gap-1">
          {/* principal amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1">
            <div className="text-base md:text-lg">Loan Amount</div>
            <div
              className={`text-xl md:text-2xl font-medium
              ${emi > 0 ? "text-[#00b386]" : "text-[#d64933]"}
              `}
            >
              {!isLA || !isLI || !isLT
                ? `#Input Error`
                : `₹ ${createINRString(Math.round(loanAmount))}`}
            </div>
          </div>
          {/* interest amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1">
            <div className="text-base md:text-lg">Interest Amount</div>
            <div
              className={`text-xl md:text-2xl font-medium
              ${interestAmount > 0 ? "text-[#00b386]" : "text-[#d64933]"}
              `}
            >
              {!isLA || !isLI || !isLT
                ? "#Input Error"
                : `₹ ${createINRString(Math.round(interestAmount))}`}
            </div>
          </div>
          {/* total amount */}
          <div className="flex flex-col justify-between w-full h-auto text-center bg-[#F2F4F7] dark:bg-bodyDark px-2 py-1">
            <div className="text-base md:text-lg">Total Amount</div>
            <div
              className={`text-xl md:text-2xl font-medium
              ${totalAmount > 0 ? "text-[#00b386]" : "text-[#d64933]"}
              `}
            >
              {!isLA || !isLI || !isLT
                ? "#Input Error"
                : `₹ ${createINRString(Math.round(totalAmount))}`}
            </div>
          </div>
        </div>
      </div>
      {/* loan Visuals */}
      {isLA && isLI && isLT ? (
        <ResponsiveContainer width={"100%"} height={300}>
          <PieChart key={"EMI Calculator"}>
            {/* principal & interest */}
            <Pie
              key={"EMI Calculator - Principal & Interest Amount"}
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
              key={"EMI Calculator - Total Amount"}
              data={totalData}
              dataKey={"value"}
              nameKey={"name"}
              cx={"50%"}
              cy={"50%"}
              innerRadius={60}
              outerRadius={80}
              fill="#47b3ff"
            ></Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="mx-auto w-3/4 h-80 text-2xl flex flex-row justify-around items-center ring-2 rounded-md ring-[#d64933] text-[#d64933] shadow-md">
          {!isLA && "Loan Amount provided is not within the range."}
          {!isLT && "Loan Tenure provided is not within the range."}
          {!isLI && "Loan Interest provided is not within the range."}
        </div>
      )}
    </div>
  );
};
