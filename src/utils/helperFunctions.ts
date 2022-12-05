// Uppercase generator
export function titleCase(word: string | null) {
	if (!word) return '';
	return word?.charAt(0).toUpperCase() + word?.slice(1);
}

export function fixedWidth(
	largeWidth: number | string,
	smallWidth: number | string = 20,
	isBelowBreakpoint: boolean = false
) {
	const listItemWidth = {
		minWidth: isBelowBreakpoint ? `${smallWidth}%` : `${largeWidth}%`,
		width: isBelowBreakpoint ? `${smallWidth}%` : `${largeWidth}%`,
		maxWidth: isBelowBreakpoint ? `${smallWidth}%` : `${largeWidth}%`,
	};
	return listItemWidth;
}
