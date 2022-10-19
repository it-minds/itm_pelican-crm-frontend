import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react'
import { SystemStyleObject, Theme } from '@mui/system';
import { dynamicUnderlineStyles, staticUnderlineStyles } from '../../styles/underlinedStyles';

export interface Props {
  children: ReactNode;
  active?: boolean;
  dynamic?: boolean;
}

const borderWidth = 10;

const Underlined = ({
  children,
  active = true,
  dynamic = true,
  ...props
}: Props) => {

  // <Box sx={{...(active && underlineStyles)}}>    Comment kept as a reference to previous, cleaner code
  if (active) {
    if (dynamic) {
      return (
        <Box sx={{...dynamicUnderlineStyles}}>
          {children}
        </Box>
      )
    }
    else {
      return (
        <Box sx={{...staticUnderlineStyles}}>
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