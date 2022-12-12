import { useEffect, useState } from 'react';

/**
 *  Custom hook that creates a debounce with a specified interval.
 * @param value Value to return after debounce timer fades (Template type T).
 * @param delay Debounce delay in miliseconds (number)
 * @returns New value for the debounced variable (Template type)
 */

export const useDebounce = <T>(value: T, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
