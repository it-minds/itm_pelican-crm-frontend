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
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
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

export type AccountManagerDealInput = {
  accountManager: AccountManagerInput;
  accountManagerId: Scalars['UUID'];
  createdAt: Scalars['Long'];
  deal: DealInput;
  dealId: Scalars['UUID'];
  hubSpotAccountManagerId: Scalars['String'];
  hubSpotDealId: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
};

export type AccountManagerInput = {
  accountManagerDeals: Array<AccountManagerDealInput>;
  createdAt: Scalars['Long'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hubSpotId: Scalars['String'];
  hubSpotUserId: Scalars['Long'];
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
  linkedInUrl?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  supplier: SupplierInput;
  supplierId: Scalars['UUID'];
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
  classification?: Maybe<Scalars['String']>;
  clientContacts: Array<ClientContact>;
  createdAt: Scalars['Long'];
  deals: Array<Deal>;
  hubSpotId: Scalars['String'];
  id: Scalars['UUID'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  name: Scalars['String'];
  officeLocation?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  segment?: Maybe<Scalars['String']>;
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

export type ClientContactInput = {
  client: ClientInput;
  clientId: Scalars['UUID'];
  contact: ContactInput;
  contactId: Scalars['UUID'];
  createdAt: Scalars['Long'];
  hubSpotClientId: Scalars['String'];
  hubSpotContactId: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
};

export type ClientInput = {
  classification?: InputMaybe<Scalars['String']>;
  clientContacts: Array<ClientContactInput>;
  createdAt: Scalars['Long'];
  deals: Array<DealInput>;
  hubSpotId: Scalars['String'];
  id: Scalars['UUID'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
  name: Scalars['String'];
  officeLocation?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  segment?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
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
  hubSpotOwnerId: Scalars['String'];
  id: Scalars['UUID'];
  jobTitle?: Maybe<Scalars['String']>;
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  lastname?: Maybe<Scalars['String']>;
  linkedInUrl?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  clientContacts: Array<ClientContactInput>;
  createdAt: Scalars['Long'];
  dealContacts: Array<DealContactInput>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  hubSpotId: Scalars['String'];
  hubSpotOwnerId: Scalars['String'];
  id: Scalars['UUID'];
  jobTitle?: InputMaybe<Scalars['String']>;
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
  lastname?: InputMaybe<Scalars['String']>;
  linkedInUrl?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
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
  currencyCode?: Maybe<Scalars['String']>;
  dealContacts: Array<DealContact>;
  dealStatus?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  fillOutAssociations: Deal;
  hubSpotId: Scalars['String'];
  hubSpotOwnerId: Scalars['String'];
  id: Scalars['UUID'];
  lastUpdatedAt?: Maybe<Scalars['Long']>;
  revenue?: Maybe<Scalars['Decimal']>;
  updateProperty: Deal;
};


export type DealFillOutAssociationsArgs = {
  accountManager?: InputMaybe<AccountManagerInput>;
  client?: InputMaybe<ClientInput>;
  contacts?: InputMaybe<Array<ContactInput>>;
};


export type DealUpdatePropertyArgs = {
  propertyName: Scalars['String'];
  propertyValue: Scalars['String'];
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

export type DealContactInput = {
  contact: ContactInput;
  contactId: Scalars['UUID'];
  createdAt: Scalars['Long'];
  deal: DealInput;
  dealId: Scalars['UUID'];
  hubSpotContactId: Scalars['String'];
  hubSpotDealId: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
};

export type DealInput = {
  accountManagerDeals: Array<AccountManagerDealInput>;
  client?: InputMaybe<ClientInput>;
  clientId?: InputMaybe<Scalars['UUID']>;
  createdAt: Scalars['Long'];
  currencyCode?: InputMaybe<Scalars['String']>;
  dealContacts: Array<DealContactInput>;
  dealStatus?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hubSpotId: Scalars['String'];
  hubSpotOwnerId: Scalars['String'];
  id: Scalars['UUID'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
  revenue?: InputMaybe<Scalars['Decimal']>;
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

export type LocationInput = {
  cityName: Scalars['String'];
  createdAt: Scalars['Long'];
  id: Scalars['UUID'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
  supplier: SupplierInput;
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

export type SupplierInput = {
  accountManagers: Array<AccountManagerInput>;
  createdAt: Scalars['Long'];
  email?: InputMaybe<Scalars['String']>;
  hubSpotId: Scalars['Long'];
  id: Scalars['UUID'];
  lastUpdatedAt?: InputMaybe<Scalars['Long']>;
  linkedInUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  officeLocations: Array<LocationInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  refreshToken: Scalars['String'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type GetDudesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDudesQuery = { __typename?: 'Query', suppliers: Array<{ __typename?: 'Supplier', id: any }>, accountManagers?: { __typename?: 'AccountManagersConnection', nodes?: Array<{ __typename?: 'AccountManager', firstName: string, lastName: string }> | null } | null };


export const GetDudesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDudes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accountManagers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetDudesQuery, GetDudesQueryVariables>;