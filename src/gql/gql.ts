/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery GetDudes {\n\t\tsuppliers {\n\t\t\tid\n\t\t}\n\t\taccountManagers {\n\t\t\tnodes {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n": types.GetDudesDocument,
    "\n\tquery GetClients {\n\t\tclients {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tofficeLocation\n\t\t\t\tpictureUrl\n\t\t\t\twebsite\n\t\t\t\tclientContacts {\n\t\t\t\t\tcontact {\n\t\t\t\t\t\tfirstname\n\t\t\t\t\t\tlastname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdeals {\n\t\t\t\t\tid\n\t\t\t\t\tdealStatus\n\t\t\t\t\tendDate\n\t\t\t\t\tlastUpdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tdealContacts {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tcontact {\n\t\t\t\t\t\t\tfirstname\n\t\t\t\t\t\t\tlastname\n\t\t\t\t\t\t\tphoneNumber\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tjobTitle\n\t\t\t\t\t\t\tlinkedInUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\taccountManagerDeals {\n\t\t\t\t\t\taccountManager {\n\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tphoneNumber\n\t\t\t\t\t\t\tsupplier {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tofficeLocations {\n\t\t\t\t\t\t\t\t\tcityName\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetClientsDocument,
};

export function graphql(source: "\n\tquery GetDudes {\n\t\tsuppliers {\n\t\t\tid\n\t\t}\n\t\taccountManagers {\n\t\t\tnodes {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetDudes {\n\t\tsuppliers {\n\t\t\tid\n\t\t}\n\t\taccountManagers {\n\t\t\tnodes {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery GetClients {\n\t\tclients {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tofficeLocation\n\t\t\t\tpictureUrl\n\t\t\t\twebsite\n\t\t\t\tclientContacts {\n\t\t\t\t\tcontact {\n\t\t\t\t\t\tfirstname\n\t\t\t\t\t\tlastname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdeals {\n\t\t\t\t\tid\n\t\t\t\t\tdealStatus\n\t\t\t\t\tendDate\n\t\t\t\t\tlastUpdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tdealContacts {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tcontact {\n\t\t\t\t\t\t\tfirstname\n\t\t\t\t\t\t\tlastname\n\t\t\t\t\t\t\tphoneNumber\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tjobTitle\n\t\t\t\t\t\t\tlinkedInUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\taccountManagerDeals {\n\t\t\t\t\t\taccountManager {\n\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tphoneNumber\n\t\t\t\t\t\t\tsupplier {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tofficeLocations {\n\t\t\t\t\t\t\t\t\tcityName\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetClients {\n\t\tclients {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tofficeLocation\n\t\t\t\tpictureUrl\n\t\t\t\twebsite\n\t\t\t\tclientContacts {\n\t\t\t\t\tcontact {\n\t\t\t\t\t\tfirstname\n\t\t\t\t\t\tlastname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdeals {\n\t\t\t\t\tid\n\t\t\t\t\tdealStatus\n\t\t\t\t\tendDate\n\t\t\t\t\tlastUpdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tdealContacts {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tcontact {\n\t\t\t\t\t\t\tfirstname\n\t\t\t\t\t\t\tlastname\n\t\t\t\t\t\t\tphoneNumber\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tjobTitle\n\t\t\t\t\t\t\tlinkedInUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\taccountManagerDeals {\n\t\t\t\t\t\taccountManager {\n\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tphoneNumber\n\t\t\t\t\t\t\tsupplier {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tofficeLocations {\n\t\t\t\t\t\t\t\t\tcityName\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;