import { Autocomplete, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type PrimaryFilterProps = {
	options: string[]; // TODO: Object should maybe be specified ?
	label: string;
	// if the options received are objects, the below prop should be used vvv
	// getOptionLabel: (option: FilmOptionType) => option.title,
};

const PrimaryFilter: FC<PrimaryFilterProps> = ({ options, label, ...rest }) => {
	const [value, setValue] = useState<string | null>('');
	// Mui autocomplete doesn't handle duplicates well, so we need to filter them out
	const [filteredOptions, setFilteredOptions] = useState(new Set(options));

	return (
		<Autocomplete
			{...rest}
			sx={{ width: '100%' }}
			value={value}
			includeInputInList
			onChange={(event: any, newValue: string | null) => {
				setValue(newValue ? newValue : '');
				console.log(newValue);
			}}
			options={Array.from(filteredOptions)}
			renderInput={params => <TextField {...params} label={label} />}
		></Autocomplete>
	);
};

export default PrimaryFilter;
