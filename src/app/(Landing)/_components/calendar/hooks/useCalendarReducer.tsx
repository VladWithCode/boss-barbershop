import { useReducer } from 'react';
import { weekdays } from '../globals';

const INITIAL_STATE: {
	month: 0 | 1;
	today: keyof typeof weekdays;
} = {
	month: 0, // 0 | 1 representing current and next month respectively
	today: 1,
};

export default function useCalendarReducer({
	currentDate,
}: {
	currentDate: Date;
}) {
	const [state, dispatch] = useReducer();
}
