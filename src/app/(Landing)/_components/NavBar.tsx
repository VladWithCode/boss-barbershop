import { getClassname } from '@/app/_utils/helpers';
import Image from 'next/image';
import React from 'react';

function NavBar() {
	return (
		<div
			className={getClassname(
				'flex items-center w-full max-w-screen-std mx-auto bg-main-dark px-4 py-2 rounded-sm'
			)}>
			<Image
				src="/img/logo-boss.png"
				width={60}
				height={60}
				alt="Boss Logo"
			/>
		</div>
	);
}

export default NavBar;
