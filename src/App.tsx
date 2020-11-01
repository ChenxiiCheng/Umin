import * as React from "react"
import {
  ChakraProvider,
  CSSReset,
  Box,
} from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box textAlign="center" fontSize="xl">
      hello world
      {/* <Grid
        minH="100vh"
        p={3}
        direction="column"
        align="center"
        justify="center"
      >
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid> */}
    </Box>
  </ChakraProvider>
)
