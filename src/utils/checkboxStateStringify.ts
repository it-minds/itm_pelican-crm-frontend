import { CheckboxInfo } from '../components/common/CheckboxGroup';

export type CheckboxObject = {
	contains: string;
};

export const checkboxGroupStateStringify = (checkboxGroupState: CheckboxInfo[]) => {
	let result: string = '';

	checkboxGroupState.forEach(checkbox => {
		if (checkbox.checked) {
			result = `${result}{ contains: "${checkbox.name}" } `;
		}
	});

	return result;
};

export const checkboxGroupStateStringify2 = (checkboxGroup: CheckboxInfo[]) => {
	let result: CheckboxObject[] = [];

	checkboxGroup.forEach(checkbox => {
		if (checkbox.checked) {
			let element: CheckboxObject = { contains: checkbox.name };
			result.push(element);
		}
	});

	return result;
};
