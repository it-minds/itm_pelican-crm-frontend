export const unixTimestampConverter = (unixTimestamp: number) => {
	return new Date(unixTimestamp / 1000000).toLocaleString('en-GB', {
		timeZone: 'UTC',
		dateStyle: 'short',
	});
};
