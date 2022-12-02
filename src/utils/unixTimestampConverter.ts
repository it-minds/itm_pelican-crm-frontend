/**
 * Converts a unix timestamp in nanoseconds to a TypeScript date. Returns a string of this date in DD/MM/YYYY format.
 */
export const unixTimestampConverter = (unixTimestamp: number) => {
	return new Date(unixTimestamp / 1000000).toLocaleString('en-GB', {
		timeZone: 'UTC',
		dateStyle: 'short',
	});
};
