'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function BackTopBtn({ isAtTop }: { isAtTop: boolean }) {
	const handleBtnClick = () => {
		scrollTo({ top: 0 });
	};

	return (
		<AnimatePresence>
			{!isAtTop ? (
				<motion.button
					className="p-0.5 text-zinc-50 rounded-full shadow-sm bg-red-700 border-2 border-red-500 hover:bg-red-600 active:bg-red-600"
					role="button"
					onClick={handleBtnClick}
					aria-label="Volver arriba"
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: 1,
						scale: 1,
						transition: { duration: 0.3, ease: 'backOut' },
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{
						scale: 0.9,
						boxShadow: 'none',
						transition: { duration: 0.075 },
						border: 0,
					}}
					exit={{
						scale: 0,
						opacity: 0,
					}}>
					<svg className="w-10 h-10 fill-current rotate-90">
						<use href="/svg/sprites.svg#chevron"></use>
					</svg>
				</motion.button>
			) : null}
		</AnimatePresence>
	);
}

export default BackTopBtn;
