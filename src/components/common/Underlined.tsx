import { Box } from '@mui/material';
import React, { ReactNode } from 'react'

export interface Props {
  children: ReactNode;
}

const borderWidth = 10;

const underlineStyles = {
  "&::before": {
    backgroundColor: "secondary.main",
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    width: "60%",
    position: "absolute",
    transition: ".2s ease-out width"
  },
  display: "inline-block",
  position: "relative",
  marginBottom: 8,
  width: "fit-content"
}

const Underlined = ({
  children,
  ...props
}: Props) => {


  return (
    <Box sx={{...underlineStyles}}>
      {children}
    </Box>
  )
}

export default Underlined