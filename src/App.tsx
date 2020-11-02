import * as React from "react"
import {
  ChakraProvider,
  CSSReset,
  Box
} from "@chakra-ui/core"
import theme from "@chakra-ui/theme"

import { Header } from './components/Header';

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box textAlign="center" fontSize="md" bg="f6f6f6">
      <Header />
    </Box>
  </ChakraProvider>
)
