import { Box, styled, SxProps, Typography } from '@mui/material';
import React, { FC } from 'react';

import { flexCol } from '../../styles/generalStyles';

export type Props = {
	children?: React.ReactNode;
	direction?: 'row' | 'column';
	noPad?: boolean;
	fillHeight?: boolean;
	fullWidth?: boolean;
	highlight?: boolean;
	sx?: SxProps;
} & React.HTMLAttributes<HTMLDivElement>;

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
	width: props.fullWidth ? '100%' : 'auto',
}));

const Card: FC<Props> = props => {
	return (
		<BaseCard
			{...props}
			sx={props.sx}
			highlight={props.highlight}
			direction={props.direction}
			noPad={props.noPad}
			fillHeight={props.fillHeight}
			fullWidth={props.fullWidth}
		>
			{props.children || (
				<Box
					sx={{
						...flexCol,
						alignItems: 'center',
					}}
				>
					<Typography variant="body">Nothing in card</Typography>
				</Box>
			)}
		</BaseCard>
	);
};

export default Card;
