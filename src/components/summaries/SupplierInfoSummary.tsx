import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import ImageContainer from '../common/ImageContainer';

type Props = {
	name: string;
	logo?: string;
};

const SupplierInfoSummary: FC<Props> = ({ name }) => {
	return (
		<>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				gap="10px"
				width="100%"
			>
				<ImageContainer imageHeight="30px" imageSource="./pelican512.png"></ImageContainer>
				<Typography mt="3px" variant="body2">
					{name}
				</Typography>
			</Box>
		</>
	);
};

export default SupplierInfoSummary;
