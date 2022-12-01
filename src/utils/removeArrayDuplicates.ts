export const removeArrayDuplicates = (array: any[]) => {
	const tempSet = new Set(array);
	return Array.from(tempSet);
};
