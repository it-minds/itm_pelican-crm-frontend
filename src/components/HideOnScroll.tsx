import React from 'react'
import { Slide, useScrollTrigger } from '@mui/material';

export interface Props {
  children: React.ReactElement;
}

const AppHideOnScroll = ( { children }: Props) => {
  const scrollTrigger = useScrollTrigger();
  
  return (
    <Slide direction="down" in={!scrollTrigger}>
      {children}
    </Slide>
  )
}

export default AppHideOnScroll