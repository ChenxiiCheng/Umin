
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

export interface UserLogin {
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    nickname?: string;
    password?: string;
    isAdmin: boolean;
    isSuperUser: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface UserWithToken {
    user: User;
    token: string;
}

export interface IQuery {
    getAllUsers(): User[] | Promise<User[]>;
    getUserByEmail(email: string): User | Promise<User>;
}

export interface IMutation {
    createUser(user: UserInput): User | Promise<User>;
    createAdminUser(user: UserInput): User | Promise<User>;
    createSuperUser(user: UserInput): User | Promise<User>;
    updateUserInfo(data: UserInput): User | Promise<User>;
    login(user: UserLogin): UserWithToken | Promise<UserWithToken>;
}
