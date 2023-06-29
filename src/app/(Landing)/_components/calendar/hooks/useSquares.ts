import { useMemo } from 'react';
import { SQUARE_COUNT, months } from '../globals';

const PARENT_MONTHS: ('prev' | 'current' | 'next')[] = [
	'prev',
	'current',
	'next',
];

export default function useSquares({
	today,
	month,
}: {
	today: Date;
	month: number;
}) {
	const year = today.getFullYear();
	const firstDayDate = new Date(year, month, 1);
	const firstDayWeekday = firstDayDate.getDay();

	const squares = useMemo(
		() =>
			fillSquares({
				today,
				month,
				firstDayWeekday,
				currentYear: firstDayDate.getFullYear(),
			}),
		[month, year]
	);

	return squares;
}

function fillSquares({
	today,
	month,
	firstDayWeekday,
	currentYear,
}: {
	today: Date;
	month: number;
	firstDayWeekday: number;
	currentYear: number;
}) {
	const squares: {
		dateValue: number;
		parentMonth: 'prev' | 'current' | 'next';
		isBeforeToday: boolean;
	}[] = new Array(SQUARE_COUNT);
	const isLeapYear = currentYear % 4 === 0;
	const monthDays: number =
		month !== 1 || isLeapYear // Check if prevMonth is either not feb or currentYear is not a leap-year
			? months[month].length // use month length as is
			: months[month].length + 1; // Add one when is feb and a leap-year

	const prevMonth = month - 1;
	const prevMonthDaysCount = firstDayWeekday; // The amount of previous month's days in the first week is also the index of the first's weekday
	const prevLastDate: number =
		prevMonth !== 1 || isLeapYear // Check if prevMonth is either not feb or currentYear is not a leap-year
			? months[prevMonth].length // use month length as is
			: months[prevMonth].length + 1; // Add one when is feb and a leap-year

	let lastDate = prevLastDate;
	let lap = 0;
	let dateValue = prevLastDate - prevMonthDaysCount;
	for (let i = 0; i < SQUARE_COUNT; i++) {
		dateValue++;

		if (dateValue > lastDate) {
			dateValue = 1;
			lastDate = monthDays;
			lap++;
		}
		const parentMonth = PARENT_MONTHS[lap];

		squares[i] = {
			dateValue,
			parentMonth,
			isBeforeToday:
				parentMonth === 'current' && today.getDate() > dateValue,
		};
	}

	return squares;
}
