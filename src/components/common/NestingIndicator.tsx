import { Box } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type NestingIndicatorProps = {
	ref?: React.RefObject<HTMLDivElement>;
	height?: number;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * This component needs to know the height of the nested elements in order to have the correct height.
 * This is done by passing
 */
const NestingIndicator: FC<NestingIndicatorProps> = ({ ref, height, onClick }) => {
	const [heightState, setHeightState] = useState(0);
	const [refState, setRefState] = useState<HTMLDivElement | null>(null);
	const [isHovering, setIsHovering] = useState(false);
	console.log('height', height);

	useEffect(() => {
		console.log('ref', ref);
		if (ref && ref.current) {
			setRefState(ref.current);

			setHeightState(ref.current.clientHeight);
			return;
		}

		if (height) {
			setHeightState(height);
		}
	}, [ref, height]);
	return (
		<Box
			sx={{
				backgroundColor: 'transparent',
				paddingX: '7px',
				'&:hover': {
					cursor: 'pointer',
				},
			}}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onClick={onClick}
		>
			<Box
				sx={{
					...nestingIndicatorStyle,
					height: heightState && `${heightState - 10}px`,

					backgroundColor: isHovering ? '#ffffff59' : '#2d3f5b',
				}}
				onClick={onClick}
			/>
		</Box>
	);
};

export const nestingIndicatorStyle = {
	backgroundColor: '#2d3f5b',
	width: '3px',
	borderColor: 'background.paper',
	'&:hover': {
		cursor: 'pointer',
	},
};

export default NestingIndicator;
