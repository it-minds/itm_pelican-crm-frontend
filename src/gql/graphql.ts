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

export type AccountManagerDealFilterInput = {
  accountManager?: InputMaybe<AccountManagerFilterInput>;
  accountManagerId?: InputMaybe<ComparableGuidOperationFilterInput>;
  and?: InputMaybe<Array<AccountManagerDealFilterInput>>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  deal?: InputMaybe<DealFilterInput>;
  dealId?: InputMaybe<ComparableGuidOperationFilterInput>;
  hubSpotAccountManagerId?: InputMaybe<StringOperationFilterInput>;
  hubSpotDealId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: InputMaybe<Array<AccountManagerDealFilterInput>>;
};

export type AccountManagerFilterInput = {
  accountManagerDeals?: InputMaybe<ListFilterInputTypeOfAccountManagerDealFilterInput>;
  and?: InputMaybe<Array<AccountManagerFilterInput>>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  hubSpotId?: InputMaybe<StringOperationFilterInput>;
  hubSpotUserId?: InputMaybe<ComparableInt64OperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  linkedInUrl?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AccountManagerFilterInput>>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  pictureUrl?: InputMaybe<StringOperationFilterInput>;
  supplier?: InputMaybe<SupplierFilterInput>;
  supplierId?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type AccountManagerSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  hubSpotId?: InputMaybe<SortEnumType>;
  hubSpotUserId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  lastUpdatedAt?: InputMaybe<SortEnumType>;
  linkedInUrl?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  pictureUrl?: InputMaybe<SortEnumType>;
  supplier?: InputMaybe<SupplierSortInput>;
  supplierId?: InputMaybe<SortEnumType>;
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

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
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

export type ClientContactFilterInput = {
  and?: InputMaybe<Array<ClientContactFilterInput>>;
  client?: InputMaybe<ClientFilterInput>;
  clientId?: InputMaybe<ComparableGuidOperationFilterInput>;
  contact?: InputMaybe<ContactFilterInput>;
  contactId?: InputMaybe<ComparableGuidOperationFilterInput>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  hubSpotClientId?: InputMaybe<StringOperationFilterInput>;
  hubSpotContactId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: InputMaybe<Array<ClientContactFilterInput>>;
};

export type ClientFilterInput = {
  and?: InputMaybe<Array<ClientFilterInput>>;
  clientContacts?: InputMaybe<ListFilterInputTypeOfClientContactFilterInput>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  deals?: InputMaybe<ListFilterInputTypeOfDealFilterInput>;
  hubSpotId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  officeLocation?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClientFilterInput>>;
  pictureUrl?: InputMaybe<StringOperationFilterInput>;
  website?: InputMaybe<StringOperationFilterInput>;
};

export type ClientSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  hubSpotId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastUpdatedAt?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  officeLocation?: InputMaybe<SortEnumType>;
  pictureUrl?: InputMaybe<SortEnumType>;
  website?: InputMaybe<SortEnumType>;
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

export type ComparableGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<Scalars['UUID']>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<Scalars['Long']>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<Scalars['Long']>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableNullableOfInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
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
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ContactFilterInput = {
  and?: InputMaybe<Array<ContactFilterInput>>;
  clientContacts?: InputMaybe<ListFilterInputTypeOfClientContactFilterInput>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  dealContacts?: InputMaybe<ListFilterInputTypeOfDealContactFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  firstname?: InputMaybe<StringOperationFilterInput>;
  hubSpotId?: InputMaybe<StringOperationFilterInput>;
  hubSpotOwnerId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  jobTitle?: InputMaybe<StringOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  lastname?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ContactFilterInput>>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
};

export type ContactSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  firstname?: InputMaybe<SortEnumType>;
  hubSpotId?: InputMaybe<SortEnumType>;
  hubSpotOwnerId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  jobTitle?: InputMaybe<SortEnumType>;
  lastUpdatedAt?: InputMaybe<SortEnumType>;
  lastname?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
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
  lastContactDate?: Maybe<Scalars['DateTime']>;
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

export type DealContactFilterInput = {
  and?: InputMaybe<Array<DealContactFilterInput>>;
  contact?: InputMaybe<ContactFilterInput>;
  contactId?: InputMaybe<ComparableGuidOperationFilterInput>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  deal?: InputMaybe<DealFilterInput>;
  dealId?: InputMaybe<ComparableGuidOperationFilterInput>;
  hubSpotContactId?: InputMaybe<StringOperationFilterInput>;
  hubSpotDealId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: InputMaybe<Array<DealContactFilterInput>>;
};

export type DealFilterInput = {
  accountManagerDeals?: InputMaybe<ListFilterInputTypeOfAccountManagerDealFilterInput>;
  and?: InputMaybe<Array<DealFilterInput>>;
  client?: InputMaybe<ClientFilterInput>;
  clientId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  dealContacts?: InputMaybe<ListFilterInputTypeOfDealContactFilterInput>;
  dealStatus?: InputMaybe<StringOperationFilterInput>;
  endDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  hubSpotId?: InputMaybe<StringOperationFilterInput>;
  hubSpotOwnerId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lastContactDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: InputMaybe<Array<DealFilterInput>>;
};

export type DealSortInput = {
  client?: InputMaybe<ClientSortInput>;
  clientId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  dealStatus?: InputMaybe<SortEnumType>;
  endDate?: InputMaybe<SortEnumType>;
  hubSpotId?: InputMaybe<SortEnumType>;
  hubSpotOwnerId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastContactDate?: InputMaybe<SortEnumType>;
  lastUpdatedAt?: InputMaybe<SortEnumType>;
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

export type ListFilterInputTypeOfAccountManagerDealFilterInput = {
  all?: InputMaybe<AccountManagerDealFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<AccountManagerDealFilterInput>;
  some?: InputMaybe<AccountManagerDealFilterInput>;
};

export type ListFilterInputTypeOfAccountManagerFilterInput = {
  all?: InputMaybe<AccountManagerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<AccountManagerFilterInput>;
  some?: InputMaybe<AccountManagerFilterInput>;
};

export type ListFilterInputTypeOfClientContactFilterInput = {
  all?: InputMaybe<ClientContactFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ClientContactFilterInput>;
  some?: InputMaybe<ClientContactFilterInput>;
};

export type ListFilterInputTypeOfDealContactFilterInput = {
  all?: InputMaybe<DealContactFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DealContactFilterInput>;
  some?: InputMaybe<DealContactFilterInput>;
};

export type ListFilterInputTypeOfDealFilterInput = {
  all?: InputMaybe<DealFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DealFilterInput>;
  some?: InputMaybe<DealFilterInput>;
};

export type ListFilterInputTypeOfLocationFilterInput = {
  all?: InputMaybe<LocationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LocationFilterInput>;
  some?: InputMaybe<LocationFilterInput>;
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

export type LocationFilterInput = {
  and?: InputMaybe<Array<LocationFilterInput>>;
  cityName?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: InputMaybe<Array<LocationFilterInput>>;
  supplier?: InputMaybe<SupplierFilterInput>;
  supplierId?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type LocationSortInput = {
  cityName?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastUpdatedAt?: InputMaybe<SortEnumType>;
  supplier?: InputMaybe<SupplierSortInput>;
  supplierId?: InputMaybe<SortEnumType>;
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
  suppliers?: Maybe<SuppliersConnection>;
};


export type QueryAccountManagerArgs = {
  id: Scalars['UUID'];
};


export type QueryAccountManagersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<AccountManagerSortInput>>;
  where?: InputMaybe<AccountManagerFilterInput>;
};


export type QueryClientArgs = {
  id: Scalars['UUID'];
};


export type QueryClientsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ClientSortInput>>;
  where?: InputMaybe<ClientFilterInput>;
};


export type QueryContactArgs = {
  id: Scalars['UUID'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ContactSortInput>>;
  where?: InputMaybe<ContactFilterInput>;
};


export type QueryDealArgs = {
  id: Scalars['UUID'];
};


export type QueryDealsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<DealSortInput>>;
  where?: InputMaybe<DealFilterInput>;
};


export type QueryLocationArgs = {
  id: Scalars['UUID'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<LocationSortInput>>;
  where?: InputMaybe<LocationFilterInput>;
};


export type QuerySupplierArgs = {
  id: Scalars['UUID'];
};


export type QuerySuppliersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<SupplierSortInput>>;
  where?: InputMaybe<SupplierFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
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

export type SupplierFilterInput = {
  accountManagers?: InputMaybe<ListFilterInputTypeOfAccountManagerFilterInput>;
  and?: InputMaybe<Array<SupplierFilterInput>>;
  createdAt?: InputMaybe<ComparableInt64OperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  hubSpotId?: InputMaybe<ComparableInt64OperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lastUpdatedAt?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  linkedInUrl?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  officeLocations?: InputMaybe<ListFilterInputTypeOfLocationFilterInput>;
  or?: InputMaybe<Array<SupplierFilterInput>>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  pictureUrl?: InputMaybe<StringOperationFilterInput>;
  refreshToken?: InputMaybe<StringOperationFilterInput>;
  websiteUrl?: InputMaybe<StringOperationFilterInput>;
};

export type SupplierSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  hubSpotId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastUpdatedAt?: InputMaybe<SortEnumType>;
  linkedInUrl?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  pictureUrl?: InputMaybe<SortEnumType>;
  refreshToken?: InputMaybe<SortEnumType>;
  websiteUrl?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type SuppliersConnection = {
  __typename?: 'SuppliersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SuppliersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Supplier>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SuppliersEdge = {
  __typename?: 'SuppliersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Supplier;
};

export type GetDudesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDudesQuery = { __typename?: 'Query', accountManagers?: { __typename?: 'AccountManagersConnection', nodes?: Array<{ __typename?: 'AccountManager', firstName: string, lastName: string }> | null } | null };


export const GetDudesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDudes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountManagers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetDudesQuery, GetDudesQueryVariables>;