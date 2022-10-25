import { Box } from '@mui/system';
import { styled } from '@mui/system';
import React, { FC, ReactNode } from 'react';

export type Props = {
	children: ReactNode;
	className?: string;
} & StyleProps;

type StyleProps = {
	imageSize?: string | number | null;
};

const StyledImageContainer = styled(Box)<StyleProps>(
	({ theme }) =>
		({ imageSize = null }: StyleProps) => ({
			width: imageSize != null ? imageSize : 'auto',
			height: imageSize != null ? imageSize : '100%',
			objectFit: 'contain',
		})
);

const ImageContainer: FC<Props> = ({ children, ...styleProps }: Props) => {
	const { imageSize } = styleProps;

	// Hvis imageSize er sat, så skal boxen have en bestemt størrelse
	// - ellers skal den som default bare fylde pladsen ud

	return <StyledImageContainer imageSize={imageSize} />;
};

export default ImageContainer;

// const StyledPageContainer = styled(Grid)<Props>(({ theme }) => (props: Props) => ({
//   backgroundColor: "background.default",
//   pt: '4rem',
//   alignContent: 'center',
//   flexDirection: 'column',
//   marginTop: "80px",
//   width: '90vw',
//   [theme.breakpoints.up("lg")]: {
//     width: theme.breakpoints.values.lg,
//     maxWidth: "90vw",
//   },
// }));
