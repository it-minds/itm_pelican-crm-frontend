import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react'
import { SystemStyleObject, Theme } from '@mui/system';

export interface Props {
  children: ReactNode;
  active?: boolean;
  dynamic?: boolean;
}

const borderWidth = 10;

const underlineStyles: (theme: Theme) => SystemStyleObject<Theme> = (theme) => ({
  "&::before": {
    backgroundColor: "secondary.main",
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    width: "60%",
    position: "absolute",
    "@keyframes expand": {
      from: {
        width: "0%"
      },
      to: {
        width: "60%"
      }
    },
    animation: "expand .5s ease"
  },
  display: "inline-block",
  position: "relative",
  marginBottom: 3,
  width: "fit-content"
})

const Underlined = ({
  children,
  active = true,
  dynamic = false,
  ...props
}: Props) => {

  if (active) {
    return (
      // <Box sx={{...(active && underlineStyles)}}>    Comment kept as a reference to previous, cleaner code
      <Box sx={underlineStyles}>
        {children}
      </Box>
    )
  }
  else {
    return (
      <Box>
        {children}
      </Box>
    )
  }
}

export default Underlined