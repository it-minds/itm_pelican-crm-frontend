import { Grid, SxProps } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import background from '../../assets/CVI5thElement.png';

export type BackgroundContainerProps = {
	children?: ReactNode;
	sx?: SxProps;
};

const BackgroundContainer: FC<BackgroundContainerProps> = ({ children }) => {
	return (
		<Grid
			container
			justifyContent="center"
			sx={{ position: 'fixed', bottom: 0, left: 0, background: `url(${background})` }}
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'left top',
				backgroundAttachment: 'fixed',
			}}
		>
			{children}
		</Grid>
	);
};

export default BackgroundContainer;
