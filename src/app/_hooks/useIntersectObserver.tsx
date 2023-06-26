import { useEffect, useRef } from 'react';

export default function useIntersectObserver({
	cb,
	opts,
}: {
	cb: (entries: IntersectionObserverEntry) => void;
	opts: IntersectionObserverInit;
}) {
	const barRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			const entry = entries[0]; // Send only one entry as it'll only observe one element

			cb(entry); // Call provided callback with current entry
		}, opts);
		if (barRef.current) observer.observe(barRef.current);

		return () => {
			if (barRef.current) observer.unobserve(barRef.current);
		};
	}, [barRef, opts, cb]);

	const elem = <div className="w-full h-0 opacity-0" ref={barRef}></div>;

	return [elem];
}
