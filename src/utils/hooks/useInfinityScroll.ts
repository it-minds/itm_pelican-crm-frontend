import { NetworkStatus } from '@apollo/client';
import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook that handles infinity scroll logic. Uses Apollo and GraphQL specific input - see parameter descriptions.
 * Also contains constant that determines percentage of progress to trigger infinity scroll.
 * @param callback Callback-function that is called when infinity-scroll is triggered
 * @param hasNextPage Boolean that signals whether the query has a next page (true) or not (false or undefined). Parameter is generated from GraphQL backend and is a part of the GraphQL query.
 * @param loadingStatus Apollo enum that shows the status of the loading query. Query is loading if `loadingStatus` < 7. Enum can be accessed by adding networkStatus to query parameters.
 */
export const useInfinityScroll = (
	callback: () => void,
	hasNextPage: boolean | undefined,
	loadingStatus: NetworkStatus
) => {
	const isActive = useRef(false);
	const SCROLL_PROGRESS_CALLBACK_PERCENTAGE = 90;

	// TODO: Add additional parameters to infinity scroll hook
	// TODO: hasNextPage, to check if there is a next page
	// TODO: networkStatus, to check if query is already fetching additional data

	// TODO: Does the above additions make sense? Does the hook become too specific?

	/**
	 * Handles the logic whenever a scroll-event triggers.
	 * Callback should trigger each time scroll progress exceeds the predetermined progress.
	 */
	const handleScroll = useCallback(() => {
		if (scrollAt() < SCROLL_PROGRESS_CALLBACK_PERCENTAGE) {
			console.log('less than tolerance');
			isActive.current = false;
			return;
		}
		if (loadingStatus < 7) return;
		console.log('passed loadingStatus check');
		if (!hasNextPage) return;
		console.log('passed hasNextPage check');
		if (isActive.current) return;
		console.log('passed isActive check');

		console.log('setting asActive to true');
		isActive.current = true;

		console.log('calling callback()');
		callback();
	}, [callback, hasNextPage, loadingStatus]);

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
