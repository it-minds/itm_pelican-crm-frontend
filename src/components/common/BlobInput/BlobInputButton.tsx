import { Box, ButtonBase, IconButton, styled, Typography } from '@mui/material';
import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button';

type BlobInputProps = { active?: boolean; onClick: () => void; clearClick?: () => void };

const BlobInputButton: FC<BlobInputProps> = ({ active, onClick, clearClick }) => {
	const xClicked = (event: any) => {
		event.stopPropagation();
		event.preventDefault();
		clearClick && clearClick();
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
				onClick={onClick}
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
		</div>
	);
};

// const BlobStyles = styled(ButtonBase)<BlobStyleProps>(({ theme }) => props => ({
// 	backgroundColor: 'red',
// }));

export default BlobInputButton;
