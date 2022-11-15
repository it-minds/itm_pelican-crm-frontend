/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery GetDudes {\n\t\tsuppliers {\n\t\t\tid\n\t\t}\n\t\taccountManagers {\n\t\t\tnodes {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n": types.GetDudesDocument,
};

export function graphql(source: "\n\tquery GetDudes {\n\t\tsuppliers {\n\t\t\tid\n\t\t}\n\t\taccountManagers {\n\t\t\tnodes {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetDudes {\n\t\tsuppliers {\n\t\t\tid\n\t\t}\n\t\taccountManagers {\n\t\t\tnodes {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;