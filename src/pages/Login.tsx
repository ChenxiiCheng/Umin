import React from 'react'
import { Box } from '@chakra-ui/core';
import { RouteComponentProps } from "@reach/router"

import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { AccountCard } from '../components/AccountCard';

export const Login = (props: RouteComponentProps) => {
  return (
    <Box d="flex" justifyContent="center" alignItems="center" w="100vw" h="100vh" mt="-60px">
      <Box position="absolute" top="100" right="100">
        <ColorModeSwitcher />
      </Box>
      <AccountCard type="login" />
    </Box>
  )
}
