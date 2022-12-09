/** Removes any duplicates from an array */
export const removeArrayDuplicates = (array: any[]) => {
	const tempSet = new Set(array);
	return Array.from(tempSet);
};
