import * as React from "react"
import {
  ChakraProvider,
  CSSReset,
  Box,
  Grid,
  GridItem,
  useColorModeValue
} from "@chakra-ui/core"
import theme from "@chakra-ui/theme"

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Content } from './components/Content';

export const App = () => {
  const globalBgColor = useColorModeValue("white", "")
  const globalColor = useColorModeValue("rgba(138, 138, 138, 1)", "white")

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="md" bgColor={globalBgColor} color={globalColor}>
        <Header />
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          minW="960px"
          maxW="1120px"
          w="100%"
          mx="auto"
          minH="800px"
        >
          <GridItem colSpan={1}>
            <Menu />
          </GridItem>
          <GridItem colSpan={3}>
            <Content />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
