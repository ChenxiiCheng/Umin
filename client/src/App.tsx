import React, {useEffect} from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import { navigate, Router as ReachRouter } from "@reach/router"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { UminPageWrapper } from './pages/UminPageWrapper'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AccountList } from './pages/AccountList'
import { getUserInfo } from './lib/user';

const client = new ApolloClient({
  uri: "https://umin-server.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

export const App = () => {
  useEffect(() => {
    getUserInfo() ? navigate("/user_accounts") : navigate("login")
  }, [])

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
