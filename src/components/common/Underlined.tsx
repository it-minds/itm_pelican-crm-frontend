import { Box } from '@mui/material';
import React, { ReactNode } from 'react'

export interface Props {
  children: ReactNode;
  active?: boolean;
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
  },
  display: "inline-block",
  position: "relative",
  marginBottom: 3,
  width: "fit-content"
}

const Underlined = ({
  children,
  active = true,
  ...props
}: Props) => {

  return (
    <Box sx={{...(active && underlineStyles)}}>
      {children}
    </Box>
  )
}

export default Underlined