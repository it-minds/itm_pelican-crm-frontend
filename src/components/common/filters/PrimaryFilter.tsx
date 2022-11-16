import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type PrimaryFilterProps = {
	options: string[]; // TODO: Object should maybe be specified ?
	label: string;
	currentValue?: (text: string | null) => void;
	hasSuggestions?: boolean;
	// if the options received are objects, the below prop should be used vvv
	// getOptionLabel: (option: FilmOptionType) => option.title,
} & TextFieldProps;

const DROPDOWN_PLACEHOLDER = 'Type to search...';

const PrimaryFilter: FC<PrimaryFilterProps> = ({
	options,
	label,
	currentValue,
	hasSuggestions = false,
	...rest
}) => {
	const [value, setValue] = useState<string | null>('');
	const [inputValue, setInputValue] = useState('');
	// MUI autocomplete doesn't handle duplicates well, so we need to filter them out
	const [filteredOptions, setFilteredOptions] = useState(new Set([DROPDOWN_PLACEHOLDER]));
	const [isOpen, setIsOpen] = useState(false);
	const { fullWidth } = rest;

	useEffect(() => {
		if (!hasSuggestions) return;

		if (inputValue.length > 0) {
			const newOptions = new Set(options);
			setFilteredOptions(newOptions);
		} else {
			setFilteredOptions(new Set([DROPDOWN_PLACEHOLDER]));
		}
	}, [inputValue, options, hasSuggestions]);

	const handleTyping = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value);
		currentValue && currentValue(event.target.value);
	};

	const handleOpen = () => {
		hasSuggestions && setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Autocomplete
			disablePortal
			value={value}
			freeSolo
			onOpen={handleOpen}
			onClose={handleClose}
			fullWidth={fullWidth}
			open={hasSuggestions ? isOpen : false}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			onChange={(event: any, newValue: string | null) => setValue(newValue)}
			options={Array.from(filteredOptions)}
			renderInput={params => (
				<TextField {...params} label={label} onChange={e => handleTyping(e)} />
			)}
		/>
	);
};

export default PrimaryFilter;
