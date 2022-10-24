import { Box } from '@mui/system';
import { styled } from '@mui/system';
import React, { ReactNode } from 'react'

export type Props = {
  className?: string;
} & StyleProps

type StyleProps = {
	imageInput: ReactNode | string;
  imageSize?: string;
  contain?: boolean;
};

const StyledImageContainer = styled(Box)<Props>(({ theme }) => (props: Props) => ({

}));

const ImageContainer = ({ ...styleProps }:Props) => {
  const { imageInput, imageSize, contain } = styleProps;
  return (
    <StyledImageContainer
    imageInput={imageInput}
    imageSize={imageSize}
    contain={contain}
    >
      {imageInput}
    </StyledImageContainer>
  )
}

export default ImageContainer

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