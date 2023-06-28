import ArrowBtn from '@/app/_components/ArrowBtn';
import React from 'react';

function MonthControls() {
	return (
		<div className="flex items-center justify-center my-5 text-zinc-300">
			<ArrowBtn
				className="btn-grad-slate transition-[border] p-1 rounded-full shadow-sm shadow-main-dark"
				direction="left"
				onClick={() => {}}
			/>
			<div className="relative btn-grad-slate mx-5 px-8 py-3 rounded-full shadow-sm shadow-main-dark">
				<p className="text-lg uppercase font-medium">Junio</p>
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
