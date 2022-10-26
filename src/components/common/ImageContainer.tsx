import { Box } from '@mui/system';
import { styled } from '@mui/system';
import React, { FC } from 'react';

export type Props = {
	className?: string;
} & StyleProps;

type StyleProps = {
	imageSource: string;
	imageWidth?: string | number;
	imageHeight?: string | number;
};

const StyledImageContainer = styled(Box)<StyleProps>(
	() =>
		({ imageWidth = '', imageHeight = '' }: StyleProps) => ({
			width: imageWidth !== null ? imageWidth : 'auto',
			height: imageHeight !== null ? imageHeight : 'auto',
		})
);

const ImageContainer: FC<Props> = ({ ...styleProps }: Props) => {
	const { imageSource, imageWidth, imageHeight } = styleProps;

	return (
		<StyledImageContainer
			imageSource={imageSource}
			imageWidth={imageWidth}
			imageHeight={imageHeight}
		>
			<img
				alt=""
				src={imageSource}
				style={{ height: '100%', width: '100%', objectFit: 'contain' }}
			/>
		</StyledImageContainer>
	);
};

export default ImageContainer;
