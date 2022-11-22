import { Box } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type NestingIndicatorProps = {
	ref?: React.RefObject<HTMLDivElement>;
	height?: number;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * This component needs to be passed the height of the nested elements in order to 	have the correct height. For now, it is only passed a useRef to the nested elements. This is not necessary, however.
 *
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
					width: '3px',
					height: heightState && `${heightState - 10}px`,
					backgroundColor: isHovering ? '#ffffff79' : '#ffffff35',
				}}
				onClick={onClick}
			/>
		</Box>
	);
};

export default NestingIndicator;
