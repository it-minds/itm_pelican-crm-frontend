import { useEffect, useState } from 'react';

/**
 *  Custom hook that creates a debounce with a specified interval.
 * @param value Value to return after debounce timer fades (Template type T).
 * @param delay Debounce delay in miliseconds (number)
 * @returns New value for the debounced variable (Template type)
 */
export function useDebounce<T>(value: T, delay: number): T {
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
}

// TODO: Find out if hooks always are written as "function useHook<T>(...)" or can be written as "const useHook = (): T => {}"
