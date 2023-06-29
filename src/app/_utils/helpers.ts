export function getClassname(
	...classes: (string | boolean | null | undefined)[]
) {
	return classes.filter(Boolean).join(' ');
}
