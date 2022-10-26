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
	({ theme }) =>
		({ imageWidth = '', imageHeight = '' }: StyleProps) => ({
			width: imageWidth != null ? imageWidth : 'auto',
			height: imageHeight != null ? imageHeight : 'auto',
			objectFit: 'contain',
		})
);

const ImageContainer: FC<Props> = ({ ...styleProps }: Props) => {
	const { imageSource, imageWidth, imageHeight } = styleProps;

	// Hvis imageSize er sat, så skal boxen have en bestemt størrelse
	// - ellers skal den som default bare fylde pladsen ud

	return (
		<StyledImageContainer
			imageSource={imageSource}
			imageWidth={imageWidth}
			imageHeight={imageHeight}
		>
			<img alt="" src={imageSource} width={imageWidth} height={imageHeight} />
		</StyledImageContainer>
	);
	// Der skal laves et img tag i ImageContainer, der source, størrelse, m.m. som properties
};

export default ImageContainer;
