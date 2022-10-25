import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react';

export interface Props {
	children: React.ReactElement;
}

const AppHideOnScroll = ({ children }: Props) => {
	const scrollTrigger = useScrollTrigger();

	return (
		<Slide direction="down" in={!scrollTrigger}>
			{children}
		</Slide>
	);
};

export default AppHideOnScroll;
