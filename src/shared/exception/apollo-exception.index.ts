import { ApolloError } from 'apollo-server-errors';

export const ExistEmailError = new ApolloError('Email already exist');
