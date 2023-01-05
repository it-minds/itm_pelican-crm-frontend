import { CheckboxInfo } from '../components/common/CheckboxGroup';

export const checkboxGroupStateStringify = (checkboxGroupState: CheckboxInfo[]) => {
	let result: string = '';

	checkboxGroupState.forEach(checkbox => {
		if (checkbox.checked) {
			result = `${result}{ contains: "${checkbox.name}" } `;
		}
	});

	return result;
};
