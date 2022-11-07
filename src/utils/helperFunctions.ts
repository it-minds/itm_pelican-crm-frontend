// Uppercase generator
export function titleCase(word: string | undefined) {
	if (!word) return '';
	return word?.charAt(0).toUpperCase() + word?.slice(1);
}
