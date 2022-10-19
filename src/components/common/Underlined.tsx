import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react'
import { SystemStyleObject, Theme } from '@mui/system';

export interface Props {
  children: ReactNode;
  active?: boolean;
  dynamic?: boolean;
}

const borderWidth = 10;

const dynamicUnderlineStyles: (theme: Theme) => SystemStyleObject<Theme> = (theme) => ({
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

const staticUnderlineStyles: (theme: Theme) => SystemStyleObject<Theme> = (theme) => ({
  "&::before": {
    backgroundColor: "secondary.main",
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    width: "60%",
    position: "absolute",
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

  // <Box sx={{...(active && underlineStyles)}}>    Comment kept as a reference to previous, cleaner code
  if (active) {
    if (dynamic) {
      return (
        <Box sx={dynamicUnderlineStyles}>
          {children}
        </Box>
      )
    }
    else {
      return (
        <Box sx={staticUnderlineStyles}>
          {children}
        </Box>
      )
    }
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