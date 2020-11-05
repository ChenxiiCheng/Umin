import * as React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import { Router as ReachRouter } from "@reach/router"

import { UminPageWrapper } from './pages/UminPageWrapper'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { TestPage } from './pages/TestPage'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />

      <ReachRouter>
        <Login path="login" />
        <Register path="register" /> 
        <UminPageWrapper path="/umin">
          <TestPage path="/test" />
        </UminPageWrapper>
      </ReachRouter>
  
    </ChakraProvider>
  )
}
