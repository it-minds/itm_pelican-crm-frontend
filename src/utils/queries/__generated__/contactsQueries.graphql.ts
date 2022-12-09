import * as Types from '../../../__generated__/globalTypes';

export type GetDudesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetDudesQuery = {
	accountManagers: {
		__typename?: 'AccountManagersConnection';
		nodes: Array<{ __typename?: 'AccountManager'; firstName: string; lastName: string }> | null;
	} | null;
};
