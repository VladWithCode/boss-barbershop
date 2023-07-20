import ArrowBtn from "@/app/_components/ArrowBtn";
import React, { useEffect, useState } from "react";
import { TMonth, months } from "./globals";
import { motion, useAnimate } from "framer-motion";
import { getClassname } from "@/app/_utils/helpers";

function MonthControls({ monthIndex }: { monthIndex: number }) {
  const [month, setMonth] = useState(months[monthIndex]);

  return (
    <div className="flex items-center justify-center my-5 text-zinc-300">
      <ArrowBtn
        className="btn-grad-slate transition-[border] p-1 rounded-full shadow-sm shadow-main-dark"
        direction="left"
        onClick={() => setMonth(months[monthIndex - 1])}
      />
      <MonthSelector
        options={[months[5], months[6]]}
        activeMonthName={month.name}
      />
      <ArrowBtn
        className="btn-grad-slate transition-[border] p-1 rounded-full shadow-sm shadow-main-dark"
        direction="right"
        onClick={() => setMonth(months[monthIndex + 1])}
      />
    </div>
  );
}

export default MonthControls;

function MonthSelector({
  options,
  activeMonthName,
}: {
  options: TMonth[];
  activeMonthName: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "#month-menu",
      isActive ? { top: "100%", opacity: 1 } : { top: "0%", opacity: 0 },
      { duration: 0.3, opacity: { duration: 0.2 } }
    );
  }, [isActive, animate]);

  useEffect(() => {
    animate(
      "#month-name",
      { left: [null, "-50%", "50%", "0%"], opacity: [null, 0, 0, 1] },
      { times: [0, 0.3, 0.6, 1], duration: 0.5 }
    );
  }, [activeMonthName, animate]);

  return (
    <div className="relative flex justify-center w-full" ref={scope}>
      <div className="inline-block btn-grad-slate mx-5 px-8 py-3 rounded-full shadow-sm shadow-main-dark z-10">
        <p
          id="month-name"
          className="relative left-0 opacity-100 text-lg uppercase font-medium"
          onClick={() => setIsActive((prev) => !prev)}
        >
          {activeMonthName}
        </p>
      </div>
      <div
        id="month-menu"
        className="absolute left-1/2 rounded-3xl -translate-x-1/2 shadow-sm shadow-main-dark mt-1 z-0 overflow-hidden"
      >
        {options.map((m, i) => (
          <button
            className={getClassname(
              "w-full text-lg uppercase font-medium mx-auto px-8 py-3 btn-grad-slate",
              i + 1 < options.length && "border-b-2 border-white"
            )}
            key={i}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
}
