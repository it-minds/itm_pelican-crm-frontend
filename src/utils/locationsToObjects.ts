import { CheckboxInfo } from '../components/common/CheckboxGroup';
import { CheckboxObject } from '../pages/WallOfClients';

export const locationsToObjects = (checkboxGroup: CheckboxInfo[]) => {
	const locations = checkboxGroup.map(location => {
		const checkbox: CheckboxObject = {
			contains: location.name,
		};

		return checkbox;
	});

	return locations;
};
