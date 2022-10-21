import { Box, styled, Fade, ButtonBase, SxProps } from '@mui/material';

import React, { FC } from 'react';
import { flexCol, flexRow } from '../../styles/generalStyles';

export type Props = {
	title?: string;
	children?: React.ReactNode;
	noPad?: boolean;
	tooltip?: string;
	transition?: boolean;
	fillHeight?: boolean;
	highlight?: boolean;
	sx?: SxProps;
};

const BaseCard = styled('div')<Props>(({ theme }) => (props: Props) => ({
	borderRadius: 6,
	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.2)',
	backgroundColor: theme.palette.background.paper,
	padding: props.noPad ? 0 : 10,
	borderStyle: 'solid',
}));

const Card: FC<Props> = props => {
	return (
		<BaseCard>
			{props.children || (
				<Box
					sx={{
						...flexCol,
						alignItems: 'center',
						padding: 25,
					}}
				>
					Hello
				</Box>
			)}
		</BaseCard>
	);
};

export default Card;
