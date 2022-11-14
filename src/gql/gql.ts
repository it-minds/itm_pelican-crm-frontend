/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery GetLocations {\n\t\tlocations {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tphoto\n\t\t}\n\t}\n": types.GetLocationsDocument,
};

export function graphql(source: "\n\tquery GetLocations {\n\t\tlocations {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tphoto\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetLocations {\n\t\tlocations {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tphoto\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;