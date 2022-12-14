import {
	Box,
	Checkbox,
	CheckboxProps,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@mui/material';
import React, { FC, useCallback, useMemo } from 'react';

export type CheckboxInfo = {
	label: string;
	name: string;
	checked: boolean;
};

type CheckboxGroupProps = {
	checkboxes: CheckboxInfo[];
	color?:
		| 'primary'
		| 'secondary'
		| 'error'
		| 'info'
		| 'success'
		| 'warning'
		| 'default'
		| undefined;
	onCheckedChange: (name: string) => void;
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({ checkboxes, color, onCheckedChange }) => {
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
		<Box>
			{' '}
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">Assign responsibility</FormLabel>
				<FormGroup>{renderCheckboxes}</FormGroup>
			</FormControl>
		</Box>
	);
};

export default CheckboxGroup;
