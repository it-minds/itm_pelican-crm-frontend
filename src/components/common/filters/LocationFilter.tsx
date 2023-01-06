import { Box, Typography } from '@mui/material';
import React, { FC, useEffect, useMemo, useState } from 'react';

import Button from '../Button';
import CheckboxGroup from '../CheckboxGroup';
import { CheckboxInfo } from '../CheckboxGroup';
import PopupFilterWrapper from './PopupFilterWrapper';

type LocationFilterProps = {
	locations: (string | null)[] | undefined;
	checkboxGroupState: CheckboxInfo[];
	onFilterUpdate: (newState: CheckboxInfo[]) => void;
};
/**
 * Receives an array of strings representing the names of locations and returns a filter component
 */
const LocationFilter: FC<LocationFilterProps> = ({
	locations,
	checkboxGroupState,
	onFilterUpdate,
}) => {
	/**
	 * Is this useMemo necessary, when state is controlled by parent?
	 */
	// useMemo(() => {
	// 	const initialState = locations.map(location => {
	// 		console.log('setting checkbox state');

	// 		return {
	// 			label: location,
	// 			name: location,
	// 			checked: false,
	// 		};
	// 	});

	// 	setCheckboxState(initialState);
	// }, [locations]);

	useEffect(() => {
		onFilterUpdate(checkboxGroupState);
		console.log('updating filter');
	}, [checkboxGroupState, onFilterUpdate]);

	const isAnythingChecked = useMemo(() => {
		return checkboxGroupState?.some(checkbox => checkbox.checked);
	}, [checkboxGroupState]);

	const isAllChecked = useMemo(() => {
		return checkboxGroupState?.every(checkbox => checkbox.checked);
	}, [checkboxGroupState]);

	const checkEverything = () => {
		if (isAllChecked) return;
		const checkedBoxes = checkboxGroupState.map(checkbox => {
			return {
				...checkbox,
				checked: true,
			};
		});

		onFilterUpdate(checkedBoxes);
	};

	const uncheckEverything = () => {
		if (!isAnythingChecked) return;

		const checkedBoxes = checkboxGroupState.map(checkbox => {
			return {
				...checkbox,
				checked: false,
			};
		});

		onFilterUpdate(checkedBoxes);
	};

	const handleCheckChanged = (name: string | null) => {
		const newCheckboxState = checkboxGroupState.map(checkbox => {
			if (checkbox.name === name) {
				return {
					...checkbox,
					checked: !checkbox.checked,
				};
			}

			return checkbox;
		});
		console.log('Handling change');

		onFilterUpdate(newCheckboxState);
	};

	return (
		<PopupFilterWrapper
			sx={{ borderRadius: '18px' }}
			title="Location"
			onClearClick={() => uncheckEverything()}
			active={isAnythingChecked}
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
					onCheckedChange={name => {
						handleCheckChanged(name);
					}}
					checkboxes={checkboxGroupState}
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
