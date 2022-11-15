import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type PrimaryFilterProps = {
	options: string[]; // TODO: Object should maybe be specified ?
	label: string;
	// if the options received are objects, the below prop should be used vvv
	// getOptionLabel: (option: FilmOptionType) => option.title,
} & TextFieldProps;

const PrimaryFilter: FC<PrimaryFilterProps> = ({ options, label, ...rest }) => {
	const [value, setValue] = useState<string | null>('');
	const [inputValue, setInputValue] = useState('');
	// MUI autocomplete doesn't handle duplicates well, so we need to filter them out
	const [filteredOptions, setFilteredOptions] = useState(new Set(['Type Stuff']));

	useEffect(() => {
		if (inputValue.length > 0) {
			const newOptions = new Set(options);
			setFilteredOptions(newOptions);
		} else {
			setFilteredOptions(new Set(['Type Stuff']));
		}
	}, [inputValue, options]);

	const { fullWidth } = rest;

	return (
		<Autocomplete
			disablePortal
			value={value}
			freeSolo
			fullWidth={fullWidth}
			open={false}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			onChange={(event: any, newValue: string | null) => setValue(newValue)}
			options={Array.from(filteredOptions)}
			renderInput={params => (
				<TextField
					{...params}
					label={label}
					onChange={e => {
						console.log(e.target.value);
						setValue(e.target.value);
					}}
				/>
			)}
		/>
	);
};

export default PrimaryFilter;
