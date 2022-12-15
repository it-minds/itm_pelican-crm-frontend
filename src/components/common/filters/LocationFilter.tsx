import { Box, Typography } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import Button from '../Button';
import CheckboxGroup from '../CheckboxGroup';
import PopupFilterWrapper from './PopupFilterWrapper';

type LocationFilterProps = {
	locations: string[];
	onClearClick: () => void;
};

const LocationFilter: FC<LocationFilterProps> = ({ locations, onClearClick }) => {
	const [checkboxState, setCheckboxState] = useState(locations);

	const checkboxes = useMemo(
		() =>
			checkboxState.map(location => ({
				label: location,
				name: location,
				checked: false,
			})),
		[checkboxState]
	);

	const anyThingChecked = useMemo(() => {
		return checkboxes.some(checkbox => checkbox.checked);
	}, [checkboxes]);

	return (
		<PopupFilterWrapper
			sx={{ borderRadius: '18px' }}
			title="Location"
			onClearClick={onClearClick}
			active={anyThingChecked}
		>
			<Box width="fit-content" paddingX="5px" paddingY="3px" borderRadius="18px">
				<CheckboxGroup onCheckedChange={() => {}} checkboxes={checkboxes} />
				<Box display="flex" width="100%" justifyContent="space-between" p="1rem">
					<Button variant="contained" sx={{ width: '4.2rem' }}>
						<Typography variant="body2">None</Typography>
					</Button>
					<Button variant="contained" sx={{ width: '4.2rem' }}>
						<Typography variant="body2">All</Typography>
					</Button>
				</Box>
			</Box>
		</PopupFilterWrapper>
	);
};

export default LocationFilter;
