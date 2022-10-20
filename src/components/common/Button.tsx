import React, { FC, ReactNode } from 'react';
import { ButtonBase, Button as MuiButton, useTheme, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { darken, Theme, SxProps } from '@mui/system';
import { flexCol } from '../../styles/generalStyles';
import { cubicTransition } from '../../../theme';

export type ButtonType = 'default' | 'outlined';
export type ButtonSize = 'default' | 'small';

/**
 * Butt
 */

export type Props = {
	children?: ReactNode;
	onClick: () => void;
	sx?: SxProps;
} & StyleProps;

type StyleProps = {
	type?: ButtonType;
	size?: ButtonSize;
	isDisabled?: boolean;
	isLoading?: boolean;
	isFullWidth?: boolean;
	noPad?: boolean;
};

const focus = (color: string) => {
	return darken(color, 0.2);
};

const ButtonStyles: FC<Props> = styled(ButtonBase)<Props>(
	({ theme }) =>
		({
			size = 'default',
			type = 'default',
			isDisabled = false,
			isLoading = false,
			isFullWidth = false,
			noPad,
		}: StyleProps) => ({
			// backgroundColor: theme.palette.secondary.main,
			display: 'flex',
			justifyContent: 'center',
			borderRadius: 200,
			height: size === 'small' ? 30 : undefined,
			width: isFullWidth ? '100%' : 'auto',
			minWidth: 30,
			backgroundColor:
				type === 'default' ? theme.palette.secondary.main : theme.palette.background.paper,
			color: type === 'default' ? theme.palette.secondary.contrastText : undefined,
			borderWidth: 2,
			borderStyle: 'solid',
			borderColor: theme.palette.secondary.main,
			opacity: isDisabled || isLoading ? 0.5 : 1,
			padding: noPad ? 0 : 10,
			transition: `all .15s ${cubicTransition}`,
			'&:focus': {
				backgroundColor: focus(theme.palette.secondary.main),
				borderColor: focus(theme.palette.secondary.main),
				boxShadow: 3,
				color: theme.palette.secondary.contrastText,
			},
		})
);

const Button: FC<Props> = ({ children, onClick, sx, ...styleProps }) => {
	const theme = useTheme();
	const { size, type, isDisabled, isLoading, isFullWidth, noPad } = styleProps;

	return (
		<ButtonStyles
			sx={sx}
			onClick={onClick}
			disabled={styleProps.isDisabled || styleProps.isLoading}
			size={size}
			type={type}
			isDisabled={isDisabled}
			isLoading={isLoading}
			isFullWidth={isFullWidth}
			noPad={noPad}
		>
			<Box marginX={1} />
			{children || "Ain't nothing here"}
			<Box marginX={1} />
			{styleProps.isLoading && <CircularProgress color="inherit" size={20} />}
		</ButtonStyles>
	);
};

export default Button;
