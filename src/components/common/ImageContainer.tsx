import { Box } from '@mui/system';
import { styled } from '@mui/system';
import React, { FC } from 'react';

export type ImageContainerProps = {
	imageSource: string;
} & ImageContainerStyleProps;

type ImageContainerStyleProps = {
	imageWidth?: string | number;
	imageHeight?: string | number;
};

const StyledImageContainer = styled(Box)<ImageContainerStyleProps>(
	() =>
		({ imageWidth, imageHeight }: ImageContainerStyleProps) => ({
			width: imageWidth || 'auto',
			minWidth: imageWidth || '',
			height: imageHeight || 'auto',
			minHeight: imageHeight || '',
		})
);

const ImageContainer: FC<ImageContainerProps> = ({ imageSource, imageWidth, imageHeight }) => {
	return (
		<StyledImageContainer imageWidth={imageWidth} imageHeight={imageHeight}>
			<img
				alt=""
				src={imageSource}
				style={{ height: '100%', width: '100%', objectFit: 'contain' }}
			/>
		</StyledImageContainer>
	);
};

export default ImageContainer;
