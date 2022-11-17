import { Grid, SxProps } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import background from '../../assets/CVI5thElement.png';

export type BackgroundContainerProps = {
	sx?: SxProps;
};

const BackgroundContainer: FC<BackgroundContainerProps> = () => {
	return (
		<Grid
			container
			sx={{ position: 'fixed', bottom: 0, left: 0, background: `url(${background})` }}
		/>
	);
};

export default BackgroundContainer;
