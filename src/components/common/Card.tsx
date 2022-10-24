import { Box, styled, Fade, ButtonBase, SxProps } from '@mui/material';
import { fade } from '@mui/material/styles';

import React, { FC } from 'react';
import { flexCol, flexRow } from '../../styles/generalStyles';

export type Props = {
	children?: React.ReactNode;
	direction?: 'row' | 'column';
	noPad?: boolean;
	fillHeight?: boolean;
	highlight?: boolean;
	sx?: SxProps;
};

const BaseCard = styled('div')<Props>(({ theme }) => (props: Props) => ({
	display: 'flex',
	flexDirection: props.direction || 'column',
	justifyContent: 'center',
	borderRadius: 6,
	boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.1)',
	backgroundColor: theme.palette.background.paper,
	padding: props.noPad ? 0 : 10,
	borderStyle: 'solid',
	borderWidth: '0.2px',
	borderColor: props.highlight ? theme.palette.secondary.main : theme.palette.primary.main + '30', // <--- opacity
	height: props.fillHeight ? '100%' : 'auto',
}));

const Card: FC<Props> = props => {
	return (
		<BaseCard
			sx={props.sx}
			highlight={props.highlight}
			direction={props.direction}
			noPad={props.noPad}
			fillHeight={props.fillHeight}
		>
			{props.children || (
				<Box
					sx={{
						...flexCol,
						alignItems: 'center',
					}}
				>
					Nothing in card
				</Box>
			)}
		</BaseCard>
	);
};

export default Card;
