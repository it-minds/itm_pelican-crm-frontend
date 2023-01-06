import { CheckboxInfo } from '../components/common/CheckboxGroup';

export const calculateInitialCheckboxState = (locations: (string | null)[] | undefined) => {
	if (!locations) {
		return [] as CheckboxInfo[];
	}

	const initialState = locations?.map(location => {
		console.log('setting checkbox state');

		const checkbox: CheckboxInfo = {
			checked: false,
			label: location,
			name: location,
		};

		return checkbox;
	});

	return initialState;
};
