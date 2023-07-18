'use client';

import { getClassname } from '@/app/_utils/helpers';
import MonthControls from './MonthControls';
import useSquares from './hooks/useSquares';

export default function Calendar({}) {
	const today = new Date();
	const squares = useSquares({
		today: today,
		month: today.getMonth(),
	});

	return (
		<div className="relative w-full p-5">
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

const squareStyles = {
	prev: 'bg-zinc-600 text-white',
	current: 'font-medium',
	next: 'text-zinc-700',
};

function DateSquares({ squares }: { squares: ReturnType<typeof useSquares> }) {
	return squares.map((square, i) => {
		return (
			<CalendarSq
				className={getClassname(
					'rounded-full ',
					square.order === 'before' &&
						square.parentMonth === 'current' &&
						'bg-zinc-400 text-zinc-100',
					square.isToday && 'btn-grad-slate text-zinc-100',
					squareStyles[square.parentMonth]
				)}
				key={i}>
				{square.dateValue}
			</CalendarSq>
		);
	});
}

function CalendarSq({
	className,
	children,
}: React.PropsWithChildren & { className?: string }) {
	return (
		<div
			className={getClassname(
				'h-8 w-8 flex items-center justify-center row-span-1 col-span-1 text-base',
				className
			)}>
			{children}
		</div>
	);
}
