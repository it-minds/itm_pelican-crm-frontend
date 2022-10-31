import { Typography } from '@mui/material';
import { Box } from '@mui/system';
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
				<Typography variant="body2">{name}</Typography>
			</Box>
		</>
	);
};

export default SupplierInfoSummary;
