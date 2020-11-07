import { gql } from '@apollo/client';

// * login
export const LOGIN = gql`
  mutation LoginMutation($user: UserLogin!) {
    login(user: $user) {
      user {
        id
        nickname
        email
        isAdmin
        isSuperUser
        isActive
      }
      token
    }
  }
`

// * register
export const REGISTER = gql`
  mutation RegisterMutatin($user: UserInput!) {
    createUser(user: $user) {
      id
      nickname
      email
      isAdmin
      isSuperUser
      isActive
    }
  }
`

export const GET_ALL_USRES = gql`
  query {
    getAllUsers {
      id
      email
      nickname
      isAdmin
      isSuperUser
      isActive
    }
  }
`