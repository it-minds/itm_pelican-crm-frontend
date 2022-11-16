/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  UUID: any;
};

export type AccountManager = {
  __typename?: 'AccountManager';
  accountManagerDeals: Array<AccountManagerDeal>;
  createdAt: Scalars['Long'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hubSpotId: Scalars['String'];
  hubSpotUserId: Scalars['Long'];
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  linkedInUrl?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  supplier: Supplier;
  supplierId: Scalars['UUID'];
};

export type AccountManagerDeal = {
  __typename?: 'AccountManagerDeal';
  accountManager: AccountManager;
  accountManagerId: Scalars['UUID'];
  createdAt: Scalars['Long'];
  deal: Deal;
  dealId: Scalars['UUID'];
  hubSpotAccountManagerId: Scalars['String'];
  hubSpotDealId: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
};

/** A connection to a list of items. */
export type AccountManagersConnection = {
  __typename?: 'AccountManagersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AccountManagersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<AccountManager>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccountManagersEdge = {
  __typename?: 'AccountManagersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AccountManager;
};

export type Client = {
  __typename?: 'Client';
  clientContacts: Array<ClientContact>;
  createdAt: Scalars['Long'];
  deals: Array<Deal>;
  hubSpotId: Scalars['String'];
  id: Scalars['UUID'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  name: Scalars['String'];
  officeLocation?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type ClientContact = {
  __typename?: 'ClientContact';
  client: Client;
  clientId: Scalars['UUID'];
  contact: Contact;
  contactId: Scalars['UUID'];
  createdAt: Scalars['Long'];
  hubSpotClientId: Scalars['String'];
  hubSpotContactId: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
};

/** A connection to a list of items. */
export type ClientsConnection = {
  __typename?: 'ClientsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ClientsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Client>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ClientsEdge = {
  __typename?: 'ClientsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Client;
};

export type Contact = {
  __typename?: 'Contact';
  clientContacts: Array<ClientContact>;
  createdAt: Scalars['Long'];
  dealContacts: Array<DealContact>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  hubSpotId: Scalars['String'];
  hubSpotOwnerId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  jobTitle?: Maybe<Scalars['String']>;
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  lastname?: Maybe<Scalars['String']>;
  linkedInUrl?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ContactsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Contact>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContactsEdge = {
  __typename?: 'ContactsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Contact;
};

export type Deal = {
  __typename?: 'Deal';
  accountManagerDeals: Array<AccountManagerDeal>;
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['UUID']>;
  createdAt: Scalars['Long'];
  dealContacts: Array<DealContact>;
  dealStatus?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hubSpotId: Scalars['String'];
  hubSpotOwnerId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
};

export type DealContact = {
  __typename?: 'DealContact';
  contact: Contact;
  contactId: Scalars['UUID'];
  createdAt: Scalars['Long'];
  deal: Deal;
  dealId: Scalars['UUID'];
  hubSpotContactId: Scalars['String'];
  hubSpotDealId: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
};

/** A connection to a list of items. */
export type DealsConnection = {
  __typename?: 'DealsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DealsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Deal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DealsEdge = {
  __typename?: 'DealsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Deal;
};

export type Location = {
  __typename?: 'Location';
  cityName: Scalars['String'];
  createdAt: Scalars['Long'];
  id: Scalars['UUID'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  supplier: Supplier;
  supplierId: Scalars['UUID'];
};

/** A connection to a list of items. */
export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LocationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Location>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LocationsEdge = {
  __typename?: 'LocationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Location;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  accountManager: AccountManager;
  accountManagers?: Maybe<AccountManagersConnection>;
  client: Client;
  clients?: Maybe<ClientsConnection>;
  contact: Contact;
  contacts?: Maybe<ContactsConnection>;
  deal: Deal;
  deals?: Maybe<DealsConnection>;
  location: Location;
  locations?: Maybe<LocationsConnection>;
  supplier: Supplier;
  suppliers: Array<Supplier>;
};


export type QueryAccountManagerArgs = {
  id: Scalars['UUID'];
};


export type QueryAccountManagersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryClientArgs = {
  id: Scalars['UUID'];
};


export type QueryClientsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryContactArgs = {
  id: Scalars['UUID'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryDealArgs = {
  id: Scalars['UUID'];
};


export type QueryDealsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationArgs = {
  id: Scalars['UUID'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySupplierArgs = {
  id: Scalars['UUID'];
};

export type Supplier = {
  __typename?: 'Supplier';
  accountManagers: Array<AccountManager>;
  createdAt: Scalars['Long'];
  email?: Maybe<Scalars['String']>;
  hubSpotId: Scalars['Long'];
  id: Scalars['UUID'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  linkedInUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  officeLocations: Array<Location>;
  phoneNumber?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  refreshToken: Scalars['String'];
  websiteUrl?: Maybe<Scalars['String']>;
};

export type GetDudesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDudesQuery = { __typename?: 'Query', suppliers: Array<{ __typename?: 'Supplier', id: any }>, accountManagers?: { __typename?: 'AccountManagersConnection', nodes?: Array<{ __typename?: 'AccountManager', firstName: string, lastName: string }> | null } | null };

export type GetClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsQuery = { __typename?: 'Query', clients?: { __typename?: 'ClientsConnection', nodes?: Array<{ __typename?: 'Client', id: any, name: string, officeLocation?: string | null, pictureUrl?: string | null, website?: string | null, clientContacts: Array<{ __typename?: 'ClientContact', contact: { __typename?: 'Contact', firstname?: string | null, lastname?: string | null } }>, deals: Array<{ __typename?: 'Deal', id: any, dealStatus?: string | null, endDate?: any | null, lastUpdatedAt?: any | null, createdAt: any, dealContacts: Array<{ __typename?: 'DealContact', id: any, contact: { __typename?: 'Contact', firstname?: string | null, lastname?: string | null, phoneNumber?: string | null, email?: string | null, jobTitle?: string | null, linkedInUrl?: string | null } }>, accountManagerDeals: Array<{ __typename?: 'AccountManagerDeal', accountManager: { __typename?: 'AccountManager', firstName: string, lastName: string, id: any, email: string, phoneNumber?: string | null, supplier: { __typename?: 'Supplier', name?: string | null, officeLocations: Array<{ __typename?: 'Location', cityName: string }> } } }> }> }> | null } | null };


export const GetDudesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDudes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accountManagers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetDudesQuery, GetDudesQueryVariables>;
export const GetClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"officeLocation"}},{"kind":"Field","name":{"kind":"Name","value":"pictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"clientContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dealStatus"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dealContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"linkedInUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"accountManagerDeals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"supplier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"officeLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cityName"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientsQuery, GetClientsQueryVariables>;