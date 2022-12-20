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
 * Should probably be changed in some of the following ways:
 * 1. The checked state of each checkbox should be stored in the parent component
 * 2. When clicking a checkbox, it should send the name of the checkbox to the parent component
 * 3. Figure out whether the all and none buttons should have seperate events or not
 * 	-	 Could be a single event that just sends up the checkboxState. Then it 			would always be the same event no matter what
 */

const LocationFilter: FC<LocationFilterProps> = ({ locations, onFilterUpdate }) => {
	const [checkboxState, setCheckboxState] = useState([] as CheckboxInfo[]);

	useEffect(() => {
		const stuff = locations.map(location => {
			return {
				label: location,
				name: location,
				checked: false,
			};
		});
		setCheckboxState(stuff);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		onFilterUpdate(checkboxState);
	}, [checkboxState, onFilterUpdate]);

	const anyThingChecked = useMemo(() => {
		return checkboxState.some(checkbox => checkbox.checked);
	}, [checkboxState]);

	const checkEverything = () => {
		const checkedBoxes = checkboxState.map(checkbox => {
			return {
				...checkbox,
				checked: true,
			};
		});

		setCheckboxState(checkedBoxes);
	};

	const uncheckEverything = () => {
		const checkedBoxes = checkboxState.map(checkbox => {
			return {
				...checkbox,
				checked: false,
			};
		});

		setCheckboxState(checkedBoxes);
	};

	return (
		<PopupFilterWrapper
			sx={{ borderRadius: '18px' }}
			title="Location"
			onClearClick={() => uncheckEverything()}
			active={anyThingChecked}
		>
			<Box width="fit-content" paddingX="5px" paddingY="3px" borderRadius="18px">
				<CheckboxGroup onCheckedChange={() => {}} checkboxes={checkboxState} />
				<Box display="flex" width="100%" justifyContent="space-between" p="1rem">
					<Button variant="contained" sx={{ width: '4.2rem' }} onClick={() => uncheckEverything}>
						<Typography variant="body2">None</Typography>
					</Button>
					<Button variant="contained" sx={{ width: '4.2rem' }}>
						<Typography variant="body2" onClick={() => checkEverything()}>
							All
						</Typography>
					</Button>
				</Box>
			</Box>
		</PopupFilterWrapper>
	);
};

export default LocationFilter;
