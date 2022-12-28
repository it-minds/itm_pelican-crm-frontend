import { Box, Typography } from '@mui/material';
import React, { FC, useEffect, useMemo, useState } from 'react';

import Button from '../Button';
import CheckboxGroup from '../CheckboxGroup';
import { CheckboxInfo } from '../CheckboxGroup';
import PopupFilterWrapper from './PopupFilterWrapper';

type LocationFilterProps = {
	locations: string[];
	onFilterUpdate: (newState: CheckboxInfo[]) => void;
};
/**
 * Receives an array of strings representing the names of locations and returns a filter component
 */
const LocationFilter: FC<LocationFilterProps> = ({ locations, onFilterUpdate }) => {
	const [checkboxState, setCheckboxState] = useState([] as CheckboxInfo[]);

	useMemo(() => {
		const initialState = locations.map(location => {
			return {
				label: location,
				name: location,
				checked: false,
			};
		});

		setCheckboxState(initialState);
	}, [locations]);

	useEffect(() => {
		onFilterUpdate(checkboxState);
	}, [checkboxState, onFilterUpdate]);

	const anyThingChecked = useMemo(() => {
		return checkboxState.some(checkbox => checkbox.checked);
	}, [checkboxState]);

	const allChecked = useMemo(() => {
		return checkboxState.every(checkbox => checkbox.checked);
	}, [checkboxState]);

	const checkEverything = () => {
		if (allChecked) return;
		const checkedBoxes = checkboxState.map(checkbox => {
			return {
				...checkbox,
				checked: true,
			};
		});

		setCheckboxState(checkedBoxes);
	};

	const uncheckEverything = () => {
		if (!anyThingChecked) return;

		const checkedBoxes = checkboxState.map(checkbox => {
			return {
				...checkbox,
				checked: false,
			};
		});

		setCheckboxState(checkedBoxes);
	};

	const handleCheckChanged = (name: string) => {
		const newCheckboxState = checkboxState.map(checkbox => {
			if (checkbox.name === name) {
				return {
					...checkbox,
					checked: !checkbox.checked,
				};
			}

			return checkbox;
		});

		setCheckboxState(newCheckboxState);
	};

	return (
		<PopupFilterWrapper
			sx={{ borderRadius: '18px' }}
			title="Location"
			onClearClick={() => uncheckEverything()}
			active={anyThingChecked}
		>
			<Box
				width="fit-content"
				paddingX="1.5rem"
				paddingY="1.2rem"
				borderRadius="18px"
				display="flex"
				flexDirection="column"
				sx={{ gap: '1rem' }}
			>
				<Typography variant="h4" fontWeight="600">
					Location
				</Typography>
				<CheckboxGroup
					formHeader="Location"
					onCheckedChange={name => {
						handleCheckChanged(name);
					}}
					checkboxes={checkboxState}
				/>
				<Box display="flex" width="100%" justifyContent="space-between">
					<Button variant="contained" sx={{ width: '4rem' }} onClick={() => uncheckEverything()}>
						<Typography variant="body2">None</Typography>
					</Button>
					<Button variant="contained" sx={{ width: '4rem' }} onClick={() => checkEverything()}>
						<Typography variant="body2">All</Typography>
					</Button>
				</Box>
			</Box>
		</PopupFilterWrapper>
	);
};

export default LocationFilter;
