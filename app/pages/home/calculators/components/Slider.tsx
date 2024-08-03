"use client";

import { createINRString } from "@/app/utils/tools";
import { useEffect, useState } from "react";
interface SliderPropsTypes {
  unit?: string | "inr" | "years" | "interest";
  min: number;
  max: number;
  currentValue: number;
  updateCurrent: (val: number | string) => void;
}
const Slider = ({
  unit,
  min,
  max,
  currentValue,
  updateCurrent,
}: SliderPropsTypes) => {
  const [minMessage, setMinMessage] = useState<string>("");
  const [maxMessage, setMaxMessage] = useState<string>("");

  useEffect(() => {
    // inr messages
    if (unit == "inr") {
      setMaxMessage(`₹ ${createINRString(Math.round(max))}`);
      setMinMessage(`₹ ${createINRString(Math.round(min))}`);
    }
    // year messages
    else if (unit == "years") {
      if (max > 1) {
        setMaxMessage(`${max} years`);
      } else {
        setMaxMessage(`${max} year`);
      }
      if (min > 1) {
        setMinMessage(`${min} years`);
      } else {
        setMinMessage(`${min} year`);
      }
    }
    // interest messages
    else if (unit == "interest") {
      setMinMessage(`${min}% p.a`);
      setMaxMessage(`${max}% p.a`);
    } else {
      setMinMessage(`${min} ${unit}`);
      setMaxMessage(`${max} ${unit}`);
    }
  }, []);

  return (
    <div className="w-full h-fit flex flex-row justify-evenly gap-2">
      <div className="flex-none text-left">{minMessage}</div>
      <input
        type="range"
        name="slider"
        id="slider"
        min={min}
        max={max}
        value={currentValue}
        onInput={(e) => {
          let val = e.currentTarget.value;
          if (val != null) {
            if (typeof val === "string") {
              updateCurrent(val);
            }
            if (typeof val === "number") {
              updateCurrent(val);
            }
          }
        }}
        className="flex-auto"
      />
      <div className="flex-none text-right">{maxMessage}</div>
    </div>
  );
};

export default Slider;
