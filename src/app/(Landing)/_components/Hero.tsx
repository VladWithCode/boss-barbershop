'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
	return (
		<div
			className="relative grid grid-rows-2 grid-cols-2 h-full z-0"
			style={{
				backgroundImage: 'url("/img/home_bg.webp")',
				backgroundPositionX: '60%',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className="w-full h-full col-span-full row-span-full z-0 bg-main-dark bg-opacity-70" />
			<motion.h1
				className="col-span-full row-start-1 text-3xl leading-snug uppercase font-medium z-10 mt-auto mb-10 mx-5"
				initial={{ y: '-100%', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.4,
				}}>
				El mejor cuidado para tu cabello y barba en la ciudad.
			</motion.h1>
			<motion.button
				className="col-span-full row-start-2 z-10 btn-grad-red m-auto mr-5 p-4 text-xl rounded-sm"
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0 }}>
				¡Agenda Ya!
			</motion.button>
		</div>
	);
}

export default Hero;
