import { Box } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type NestingIndicatorProps = {
	height?: number;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * This component needs to be passed the height of the nested elements in order to 	have the correct height. The height can be both static or dynamicin that it will expand/shrink as the content changes.
 */
const NestingIndicator: FC<NestingIndicatorProps> = ({ height, onClick }) => {
	const [heightState, setHeightState] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		if (height) {
			setHeightState(height);
		}
	}, [height]);
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
			/>
		</Box>
	);
};

export default NestingIndicator;
