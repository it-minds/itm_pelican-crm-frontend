import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook that handles infinity scroll logic.
 * Also contains contant that determines percentage of progress to trigger infinity scroll.
 * @param callback Callback-function that is called when infinity-scroll is triggered
 */
export const useInfinityScroll = (callback: () => void) => {
	const isActive = useRef(false);
	const SCROLL_PROGRESS_CALLBACK_PERCENTAGE = 90;

	/**
	 * Handles the logic whenever a scroll-event triggers.
	 * Callback should trigger each time scroll progress exceeds the predetermined progress.
	 */
	const handleScroll = useCallback(() => {
		console.log('handleScroll');
		if (scrollAt() < SCROLL_PROGRESS_CALLBACK_PERCENTAGE) {
			isActive.current = false;
			return;
		}

		if (isActive.current) return;

		isActive.current = true;

		callback();
	}, [callback]);

	/**
	 * Setup scroll-event listener on mount and remove on unmount.
	 */
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	/**
	 * Calculates how far down the page a user has scrolled currently.
	 * @returns Progress towards bottom in percentage.
	 */
	const scrollAt = (): number => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		return (scrollTop / (scrollHeight - clientHeight)) * 100;
	};
};

// * I have an assumption that this function only works properly while the ammount of data is managable.
// * With huge data-sets you will keep fecthing more, because the newly fetched paginated data
// * isn't enough to move the scrollbar above the 90% threshold. At some point every time
// * you scroll, regardless of direction, you will fetch more data.
// TODO: Fix the above (potential) issue
