import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Typography,
	useTheme,
} from '@mui/material';
import React, { FC, useCallback, useMemo } from 'react';

export type CheckboxInfo = {
	label: string;
	name: string;
	checked: boolean;
};

type CheckboxGroupProps = {
	checkboxes: CheckboxInfo[];
	formHeader?: string;
	onCheckedChange: (name: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const CheckboxGroup: FC<CheckboxGroupProps> = ({ checkboxes, formHeader, onCheckedChange }) => {
	const handleChange = useCallback(
		(name: string) => {
			onCheckedChange(name);
		},

		[onCheckedChange]
	);

	const renderCheckboxes = useMemo(() => {
		return checkboxes.map((checkbox, index) => {
			return (
				<FormControlLabel
					control={
						<Checkbox
							checked={checkbox.checked}
							onChange={() => handleChange(checkbox.name)}
							name={checkbox.name}
						/>
					}
					label={checkbox.label}
				/>
			);
		});
	}, [checkboxes, handleChange]);

	return (
		<Box display="flex" flexDirection="column" alignItems="center" width="100%">
			<FormControl component="fieldset" variant="standard">
				<FormGroup>{renderCheckboxes}</FormGroup>
			</FormControl>
		</Box>
	);
};

export default CheckboxGroup;
