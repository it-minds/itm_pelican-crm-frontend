import { Box, Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import React, { FC, useCallback, useMemo } from 'react';

export type CheckboxInfo = {
	label: string | null;
	name: string | null;
	checked: boolean;
};

type CheckboxGroupProps = {
	checkboxes: CheckboxInfo[];
	onCheckedChange: (name: string | null) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const CheckboxGroup: FC<CheckboxGroupProps> = ({ checkboxes, onCheckedChange }) => {
	const handleChange = useCallback(
		(name: string | null) => {
			onCheckedChange(name);
		},

		[onCheckedChange]
	);

	const renderCheckboxes = useMemo(() => {
		return checkboxes.map(checkbox => {
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
