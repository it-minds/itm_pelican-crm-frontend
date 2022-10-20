import React, { FC, ReactNode } from 'react';
import { ButtonBase, Button as MuiButton, useTheme, Box } from '@mui/material';
import { styled } from '@mui/system';
import { darken, Theme } from '@mui/system';
import { flexCol } from '../../styles/generalStyles';

export type Props = {
	children?: ReactNode;
	onClick: () => void;
	className?: string;
} & StyleProps;

type StyleProps = {
	size?: 'small' | 'default';
	type?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	isFullWidth?: boolean;
	noPad?: boolean;
};

const focus = (color: string) => {
	return darken(color, 0.2);
};

const TestButton2 = styled(ButtonBase)<Props>(({ theme }) => (props: Props) => ({
	backgroundColor: theme.palette.secondary.main,
	display: 'flex',
	justifyContent: 'center',
	borderRadius: 200,
	color: theme.palette.secondary.contrastText,
	opacity: props.isDisabled ? 0.5 : 1,
	'&:focus': {
		backgroundColor: focus(theme.palette.secondary.main),
		borderColor: focus(theme.palette.secondary.main),
		boxShadow: 3,
		color: theme.palette.secondary.contrastText,
	},
}));

const Button: FC<Props> = ({ children, onClick, className, ...styleProps }) => {
	const theme = useTheme();
	const { size, type, isDisabled, isLoading, isFullWidth, noPad } = styleProps;

	const styles = {
		// opacity: isDisabled ? 0.5 : 1,
		padding: noPad ? 0 : 1.25,
	};

	return (
		<Box sx={{ ...flexCol, gap: 2, mt: 2 }}>
			{/* <TestButton variant="outlined">Test</TestButton>
			<TestButton2>Test</TestButton2> */}
			{/* <ButtonBase className={`${classes.root} ${className ?? ''}`}>Base</ButtonBase> */}
			<TestButton2 onClick={() => console.log('Hello')} isDisabled={true} sx={styles}>
				Test
			</TestButton2>
		</Box>
	);
};

export default Button;
