'use client';
import React, { useCallback, useState } from 'react';
import useIntersectObserver from '@/app/_hooks/useIntersectObserver';

function ObservableBar({
	setIsIntersecting,
}: {
	setIsIntersecting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const intersectCallback = useCallback(
		(entry: IntersectionObserverEntry) => {
			setIsIntersecting(entry.isIntersecting);
		},
		[setIsIntersecting]
	);
	const [Bar] = useIntersectObserver({
		cb: intersectCallback,
		opts: {
			root: null,
			threshold: 1.0,
		},
	});

	return Bar;
}

export default ObservableBar;
