import ArrowBtn from '@/app/_components/ArrowBtn';
import React, { useState } from 'react';
import { months } from './globals';

function MonthControls({ monthIndex }: { monthIndex: number }) {
	const [month, setMonth] = useState(months[monthIndex]);

	return (
		<div className="flex items-center justify-center my-5 text-zinc-300">
			<ArrowBtn
				className="btn-grad-slate transition-[border] p-1 rounded-full shadow-sm shadow-main-dark"
				direction="left"
				onClick={() => {}}
			/>
			<div className="relative btn-grad-slate mx-5 px-8 py-3 rounded-full shadow-sm shadow-main-dark">
				<p className="text-lg uppercase font-medium">{month.name}</p>
			</div>
			<ArrowBtn
				className="btn-grad-slate transition-[border] p-1 rounded-full shadow-sm shadow-main-dark"
				direction="right"
				onClick={() => {}}
			/>
		</div>
	);
}

export default MonthControls;
