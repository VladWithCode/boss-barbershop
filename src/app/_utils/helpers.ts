export function getClassname(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
