import { Box, BoxProps } from '@mui/material';
import React, { FC, useState } from 'react';

type NestingIndicatorProps = {
	height: number;
} & BoxProps;

/**
 * This component needs to be passed the height of the nested elements in order to 	have the correct height. The height can be both static or dynamic.
 *
 */
const NestingIndicator: FC<NestingIndicatorProps> = ({ height, onClick, ...rest }) => {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<Box
			sx={{
				backgroundColor: 'transparent',
				paddingX: '7px',
				'&:hover': {
					cursor: 'pointer',
				},
			}}
			{...rest}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onClick={onClick}
		>
			<Box
				sx={{
					width: '3px',
					height: `${height ? height - 10 : 0}px`,
					backgroundColor: isHovering ? '#ffffff79' : '#ffffff35',
					transition: 'all 0.15s ease-in-out',
				}}
			/>
		</Box>
	);
};

export default NestingIndicator;
