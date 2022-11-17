import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type PrimaryFilterProps = {
	options?: string[]; // TODO: Make sure this is actually a string[], see comments below
	label: string;
	onValueChange?: (text: string | string[] | null) => void; // if controlled by parent
	hasSuggestions?: boolean;
	multiple?: boolean;
	freeSolo?: boolean;
	//* if the options received are objects, the below prop should be used vvv
	//* getOptionLabel: (option: CompanyInfo) => option.name, <-- something similar to this
	getOptionLabel?: (option: string) => string;
} & TextFieldProps;

const DROPDOWN_PLACEHOLDER = 'Type to search...';

/**
 * Functions as a regular textfield but has can be used as a normal autcomplete if the `hasSuggestions` prop is set.
 * Can take multiple values if the `multiple` prop is set.
 */
const PrimaryFilter: FC<PrimaryFilterProps> = ({
	options,
	label,
	onValueChange,
	hasSuggestions = false,
	multiple = false,
	freeSolo = true,
	fullWidth = true,
}) => {
	const [value, setValue] = useState<string | string[] | null>(new Array<string>());
	const [inputValue, setInputValue] = useState('');
	// MUI autocomplete doesn't handle duplicates well, so we need to filter them out
	const [filteredOptions, setFilteredOptions] = useState(new Set([DROPDOWN_PLACEHOLDER]));
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!hasSuggestions) return;
		if (inputValue.length > 0) {
			const newOptions = new Set(options);
			setFilteredOptions(newOptions);
		} else {
			setFilteredOptions(new Set([DROPDOWN_PLACEHOLDER]));
		}
	}, [inputValue, options, hasSuggestions]);

	// useEffect with debounce to prevent excessive rerenders when typing
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (inputValue.length > 0) {
				onValueChange && onValueChange(inputValue);
			} else return;
		}, 350);
		return () => {
			clearTimeout(timeout);
		};
	}, [inputValue, onValueChange]);

	const handleSelection = (newValue: string | string[] | null) => {
		// TODO: Try to achieve the same functionality in a less hacky way
		if (newValue?.includes(DROPDOWN_PLACEHOLDER)) return;

		setValue(newValue);
		onValueChange && onValueChange(newValue);
	};

	return (
		<Autocomplete
			options={Array.from(filteredOptions)}
			disablePortal
			value={multiple ? (value as string[]) : value}
			freeSolo={freeSolo}
			multiple={multiple}
			blurOnSelect={!multiple}
			onOpen={() => {
				hasSuggestions && setIsOpen(true);
			}}
			onClose={() => setIsOpen(false)}
			fullWidth={fullWidth}
			open={hasSuggestions ? isOpen : false}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
			onChange={(event, newValue) => handleSelection(newValue)}
			renderInput={params => <TextField {...params} label={label} />}
		/>
	);
};

export default PrimaryFilter;
