import React, { MouseEvent } from 'react';
import { getClassname } from '../_utils/helpers';

const stylesPerDirection = {
	up: 'rotate-90',
	right: 'rotate-180',
	down: '-rotate-90',
	left: 'rotate-0',
};

function ArrowBtn({
	direction,
	className,
	onClick,
}: {
	direction: 'up' | 'right' | 'left' | 'down';
	className?: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
	return (
		<button
			className={getClassname(className, stylesPerDirection[direction])}
			onClick={onClick}>
			<svg className="w-8 h-8 fill-current">
				<use href="/svg/sprites.svg#chevron"></use>
			</svg>
		</button>
	);
}

export default ArrowBtn;
