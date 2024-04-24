import type { NextFunction, Request, Response } from 'express';
import type { DeepPartial } from 'utility-types';


export type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];


export type TypedRequest<
  ReqBody = Record<string, unknown>,
  QueryString = Record<string, unknown>
> = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  DeepPartial<ReqBody>,
  DeepPartial<QueryString>
>;


export interface UserSignUpCredentials {
    username: string;
    email: string;
    password: string;
  }
  
  export type UserLoginCredentials = Omit<UserSignUpCredentials, 'username'>;