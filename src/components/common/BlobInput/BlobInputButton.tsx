import {
	Box,
	ButtonBase,
	ButtonProps,
	IconButton,
	Popover,
	styled,
	Typography,
} from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button';
import ClientInfoSummary from '../../summaries/ClientInfoSummary';

type BlobInputProps = {
	active?: boolean;
	// onClick: () => void;
	clearClick?: () => void;
	children?: React.ReactNode;
} & ButtonProps;

const BlobInputButton: FC<BlobInputProps> = ({ active, clearClick, children, onClick }) => {
	const [showChildren, setShowChildren] = useState(false);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const xClicked = (event: any) => {
		event.stopPropagation();
		clearClick && clearClick();
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setShowChildren(true);
	};

	return (
		<div>
			<Button
				sx={{
					pt: '2px',
					justifyContent: 'space-between',
					paddingInline: !active ? '8px' : '0px',
					paddingInlineEnd: '8px',
				}}
				noPad
				btnType={active ? 'default' : 'outlined'}
				onClick={event => handleClick(event)}
			>
				{active && (
					<ButtonBase sx={{ borderRadius: '25px' }} onMouseDown={event => xClicked(event)}>
						<CloseIcon fontSize="small" />
					</ButtonBase>
				)}
				<Box>
					<Typography mt="1px" variant="body2">
						Click me
					</Typography>
				</Box>
			</Button>
			<Popover
				open={showChildren}
				anchorEl={anchorEl}
				onClose={() => setShowChildren(false)}
				sx={{ borderRadius: '16px' }}
			>
				<Box>
					{children || (
						<ClientInfoSummary
							city="Aarhus"
							title="Djurs Sommerland"
							address="Holdkæftvej 1"
							sx={{ borderRadius: '26px' }}
							url="https://www.djurssommerland.dk/"
						/>
					)}
				</Box>
			</Popover>
		</div>
	);
};

// const BlobStyles = styled(ButtonBase)<BlobStyleProps>(({ theme }) => props => ({
// 	backgroundColor: 'red',
// }));

export default BlobInputButton;
