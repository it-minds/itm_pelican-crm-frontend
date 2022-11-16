import CloseIcon from '@mui/icons-material/Close';
import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

const ClearFilter: FC<ButtonBaseProps> = ({ children, ...rest }) => {
	return (
		<motion.div
			initial={{ opacity: 0, width: 0 }}
			animate={{ opacity: 1, width: 30 }}
			exit={{ opacity: 0, width: 0 }}
		>
			<ButtonBase sx={{ marginTop: '1px', borderRadius: '25px' }} {...rest}>
				<CloseIcon fontSize="medium" />
			</ButtonBase>
		</motion.div>
	);
};

export default ClearFilter;
