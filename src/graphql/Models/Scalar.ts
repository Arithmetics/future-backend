import { GraphQLDate } from 'graphql-iso-date';
import { GraphQLUpload } from 'graphql-upload';
import { asNexusMethod } from '@nexus/schema';

export const Upload = GraphQLUpload;
export const DateTime = GraphQLDate;
export const GQLDate = asNexusMethod(GraphQLDate, 'date');
// export const GenderEnum = asNexusMethod(Gender, 'gender');
