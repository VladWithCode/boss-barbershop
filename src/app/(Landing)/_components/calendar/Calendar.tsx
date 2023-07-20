"use client";

import { getClassname } from "@/app/_utils/helpers";
import MonthControls from "./MonthControls";
import useSquares from "./hooks/useSquares";

export default function Calendar({}) {
  const today = new Date();
  const squares = useSquares({
    today: today,
    month: today.getMonth(),
  });

  return (
    <div className="relative w-full max-w-xs mx-auto p-5">
      {/* Controls */}
      <MonthControls monthIndex={today.getMonth()} />
      {/* Date Picker */}
      <div className="aspect-square grid grid-rows-7 grid-cols-7 items-center justify-center">
        {/* Week days */}
        <CalendarSq className="font-semibold">Dom</CalendarSq>
        <CalendarSq className="font-semibold">Lun</CalendarSq>
        <CalendarSq className="font-semibold">Mar</CalendarSq>
        <CalendarSq className="font-semibold">Mie</CalendarSq>
        <CalendarSq className="font-semibold">Jue</CalendarSq>
        <CalendarSq className="font-semibold">Vie</CalendarSq>
        <CalendarSq className="font-semibold">Sab</CalendarSq>
        {/* Dates */}
        <DateSquares squares={squares} />
      </div>
    </div>
  );
}

const squareStyles: { [key: string]: string } = {
  prev: "bg-zinc-600 text-white",
  current: "font-medium",
  next: "text-zinc-700",
};

function DateSquares({ squares }: { squares: ReturnType<typeof useSquares> }) {
  return (
    <>
      {squares.map((square, i) => {
        return (
          <CalendarSq
            className={getClassname(
              "rounded-full ",
              square.order === "before" &&
                square.parentMonth === "current" &&
                "bg-zinc-400 text-zinc-100",
              square.isToday && "btn-grad-slate text-zinc-100",
              squareStyles[square.parentMonth]
            )}
            key={i}
            disabled={
              square.order === 'before'
            }
          >
            {square.dateValue}
          </CalendarSq>
        );
      })}
    </>
  );
}

function CalendarSq({
  className,
  children,
  onClick,
  ...props
}: React.PropsWithChildren & {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={getClassname(
        "h-8 w-8 flex items-center justify-center row-span-1 col-span-1 text-base",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
