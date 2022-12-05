// Uppercase generator
export function titleCase(word: string | null) {
	if (!word) return '';
	return word?.charAt(0).toUpperCase() + word?.slice(1);
}

export function fixedWidth(
	largeWidth: number | string,
	smallWidth: number | string,
	isBelowMedium: boolean = false
) {
	const listItemWidth = {
		minWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
		width: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
		maxWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
	};
	return listItemWidth;
}
