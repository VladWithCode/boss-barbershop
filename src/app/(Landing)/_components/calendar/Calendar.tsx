'use client';

import { getClassname } from '@/app/_utils/helpers';
import MonthControls from './MonthControls';
import useSquares from './hooks/useSquares';

const DateClassnames = {
	prev: 'text-zinc-400 font-light',
	next: 'text-zinc-400 font-light',
	current: 'text-main-dark font-medium',
};

export default function Calendar({}) {
	const today = new Date();
	const squares = useSquares({
		today: today,
		month: new Date(2023, 5, 1).getMonth(),
	});

	return (
		<div className="relative w-full p-5">
			{/* Controls */}
			<MonthControls />
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

function DateSquares({ squares }: { squares: ReturnType<typeof useSquares> }) {
	return squares.map((square, i) => (
		<CalendarSq
			className={getClassname(
				DateClassnames[square.parentMonth],
				square.isBeforeToday && 'bg-'
			)}
			key={i}>
			{square.dateValue}
		</CalendarSq>
	));
}

function CalendarSq({
	className,
	children,
}: React.PropsWithChildren & { className?: string }) {
	return (
		<div
			className={getClassname(
				'text-center row-span-1 col-span-1 text-base',
				className
			)}>
			{children}
		</div>
	);
}
