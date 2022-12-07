import * as Types from '../../../__generated__/globalTypes';

export type getFilteredClientsQueryVariables = Types.Exact<{
  currentClientSearch?: Types.InputMaybe<Types.Scalars['String']>;
  currentContactSearch?: Types.InputMaybe<Types.Scalars['String']>;
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  after?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type getFilteredClientsQuery = { clients: { __typename?: 'ClientsConnection', totalCount: number, nodes: Array<{ __typename?: 'Client', id: any, name: string, officeLocation: string | null, website: string | null, clientContacts: Array<{ __typename?: 'ClientContact', contact: { __typename?: 'Contact', id: any, firstName: string | null, lastName: string | null, email: string | null, phoneNumber: string | null, dealContacts: Array<{ __typename?: 'DealContact', deal: { __typename?: 'Deal', id: any, dealStatus: string | null, startDate: any | null, endDate: any | null, lastContactDate: any | null, accountManagerDeals: Array<{ __typename?: 'AccountManagerDeal', accountManager: { __typename?: 'AccountManager', id: any, firstName: string, lastName: string, email: string, phoneNumber: string | null, pictureUrl: string | null, supplier: { __typename?: 'Supplier', id: any, name: string | null, pictureUrl: string | null, officeLocation: string | null } } }> } }> } }> }> | null } | null };

export type FRAGMENT_CLIENTFragment = { __typename?: 'Client', id: any, name: string, officeLocation: string | null, website: string | null, clientContacts: Array<{ __typename?: 'ClientContact', contact: { __typename?: 'Contact', id: any, firstName: string | null, lastName: string | null, email: string | null, phoneNumber: string | null, dealContacts: Array<{ __typename?: 'DealContact', deal: { __typename?: 'Deal', id: any, dealStatus: string | null, startDate: any | null, endDate: any | null, lastContactDate: any | null, accountManagerDeals: Array<{ __typename?: 'AccountManagerDeal', accountManager: { __typename?: 'AccountManager', id: any, firstName: string, lastName: string, email: string, phoneNumber: string | null, pictureUrl: string | null, supplier: { __typename?: 'Supplier', id: any, name: string | null, pictureUrl: string | null, officeLocation: string | null } } }> } }> } }> };

export type FRAGMENT_CONTACTFragment = { __typename?: 'Contact', id: any, firstName: string | null, lastName: string | null, email: string | null, phoneNumber: string | null, dealContacts: Array<{ __typename?: 'DealContact', deal: { __typename?: 'Deal', id: any, dealStatus: string | null, startDate: any | null, endDate: any | null, lastContactDate: any | null, accountManagerDeals: Array<{ __typename?: 'AccountManagerDeal', accountManager: { __typename?: 'AccountManager', id: any, firstName: string, lastName: string, email: string, phoneNumber: string | null, pictureUrl: string | null, supplier: { __typename?: 'Supplier', id: any, name: string | null, pictureUrl: string | null, officeLocation: string | null } } }> } }> };

export type FRAGMENT_DEALFragment = { __typename?: 'Deal', id: any, dealStatus: string | null, startDate: any | null, endDate: any | null, lastContactDate: any | null, accountManagerDeals: Array<{ __typename?: 'AccountManagerDeal', accountManager: { __typename?: 'AccountManager', id: any, firstName: string, lastName: string, email: string, phoneNumber: string | null, pictureUrl: string | null, supplier: { __typename?: 'Supplier', id: any, name: string | null, pictureUrl: string | null, officeLocation: string | null } } }> };

export type FRAGMENT_ACCOUNT_MANAGERFragment = { __typename?: 'AccountManager', id: any, firstName: string, lastName: string, email: string, phoneNumber: string | null, pictureUrl: string | null, supplier: { __typename?: 'Supplier', id: any, name: string | null, pictureUrl: string | null, officeLocation: string | null } };

export type FRAGMENT_SUPPLIERFragment = { __typename?: 'Supplier', id: any, name: string | null, pictureUrl: string | null, officeLocation: string | null };
