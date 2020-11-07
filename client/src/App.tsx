import * as React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import { Router as ReachRouter } from "@reach/router"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { UminPageWrapper } from './pages/UminPageWrapper'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AccountList } from './pages/AccountList'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ReachRouter>
          <Login path="login" />
          <Register path="register" /> 
          <UminPageWrapper path="/">
            <AccountList path="user_accounts" />
          </UminPageWrapper>
        </ReachRouter>
      </ChakraProvider>
    </ApolloProvider>
  )
}
