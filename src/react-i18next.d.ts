import 'react-i18next';
import en from '../public/locales/en/translation.json';
import no from '../public/locales/no/translation.json';
import sarcasm from '../public/locales/sarcasm/translation.json';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		resources: {
			en: typeof en;
			no: typeof no;
			sarcasm: typeof sarcasm;
		};
	}
}
