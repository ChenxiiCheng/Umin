
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInput {
    email: string;
    nickname: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    nickname?: string;
    password: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createUser(input: UserInput): User | Promise<User>;
    getUserByEmail(email: string): User | Promise<User>;
}
