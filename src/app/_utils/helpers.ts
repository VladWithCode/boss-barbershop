export function getClassname(...classes: (string | null | undefined)[]) {
	return classes.filter(Boolean).join(' ');
}
