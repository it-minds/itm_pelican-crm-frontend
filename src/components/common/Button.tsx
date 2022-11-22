import { ButtonBase, ButtonProps, CircularProgress } from '@mui/material';
import { styled } from '@mui/material';
import { darken, SxProps } from '@mui/system';
import React, { FC, ReactNode } from 'react';

import { cubicTransition } from '../../../theme';

/**
 * * Possible refactor of styled():
 * https://stackoverflow.com/a/71571674
 */

export type ButtonType = 'default' | 'outlined' | undefined;
export type ButtonSize = 'default' | 'small';

export type Props = {
	children?: ReactNode;
	sx?: SxProps;
} & StyleProps &
	ButtonProps;

type StyleProps = {
	btnType?: ButtonType;
	size?: ButtonSize;
	isDisabled?: boolean;
	isLoading?: boolean;
	isFullWidth?: boolean;
	noPad?: boolean;
	secondary?: boolean;
};

const focus = (color: string) => {
	return darken(color, 0.2);
};

const ButtonStyles = styled(ButtonBase, {
	shouldForwardProp: prop => typeof prop !== 'string' || prop !== 'noPad',
})<StyleProps>(
	({ theme }) =>
		({
			size = 'default',
			btnType = 'default',
			isDisabled = false,
			isLoading = false,
			isFullWidth = false,
			secondary = false,
			noPad,
		}: StyleProps) => ({
			display: 'flex',
			justifyContent: 'center',
			borderRadius: 200,
			height: size === 'small' ? 30 : undefined,
			width: isFullWidth ? '100%' : 'fit-content',
			minWidth: 30,
			backgroundColor: determineBackgroundColor(secondary, btnType, theme),
			color: btnType === 'default' ? theme.palette.secondary.contrastText : undefined,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: secondary ? theme.palette.secondary.main : theme.palette.primary.main,
			opacity: isDisabled || isLoading ? 0.5 : 1,
			// padding: noPad ? 0 : 10,
			paddingInlineEnd: noPad ? 0 : 18,
			paddingInlineStart: noPad ? 0 : 18,
			transition: `all .15s ${cubicTransition}`,
			'&:focus': {
				backgroundColor: secondary
					? focus(theme.palette.secondary.main)
					: focus(theme.palette.primary.main),
				borderColor: secondary
					? focus(theme.palette.secondary.main)
					: focus(theme.palette.primary.main),
				boxShadow: 3,
				color: theme.palette.secondary.contrastText,
			},
		})
);

function determineBackgroundColor(secondary: boolean | undefined, btnType: ButtonType, theme: any) {
	if (btnType === 'default') {
		return secondary ? theme.palette.secondary.main : theme.palette.primary.main;
	}
	return 'transparent';
}

const Button: FC<Props> = ({ children, onClick, sx, ...styleProps }) => {
	const { size, btnType, isDisabled, isLoading, isFullWidth, noPad, secondary } = styleProps;

	return (
		<ButtonStyles
			onClick={onClick}
			disabled={isDisabled || isLoading}
			size={size}
			btnType={btnType}
			isDisabled={isDisabled}
			isLoading={isLoading}
			isFullWidth={isFullWidth}
			noPad={isLoading ? false : noPad}
			secondary={secondary}
			sx={{ ...sx, position: 'relative' }}
		>
			{children || "Ain't nothing here"}
			{isLoading && (
				<CircularProgress color="inherit" size={16} sx={{ position: 'absolute', right: 1 }} />
			)}
		</ButtonStyles>
	);
};

export default Button;
