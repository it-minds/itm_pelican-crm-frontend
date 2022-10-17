import { Box } from '@mui/material';
import React, { ReactNode } from 'react'

export interface Props {
  children: ReactNode;
  active?: boolean;
}

const borderWidth = 10;

const underlineStyles = {
  root: {
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
}

const Underlined = ({
  children,
  active = true,
  ...props
}: Props) => {


  return (
    <Box sx={{...underlineStyles.root}}>
      {children}
    </Box>
  )
}

export default Underlined