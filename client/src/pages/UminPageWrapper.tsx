import React, {useEffect} from 'react'
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/core';
import { Redirect, RouteComponentProps, useNavigate } from "@reach/router"

import {Header} from '../components/Header'
import {Menu} from '../components/Menu'
import { getUserInfo } from '../lib/user';

interface IProps extends RouteComponentProps {
  children: JSX.Element[] | JSX.Element
}

export const UminPageWrapper: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate()
  const globalBgColor = useColorModeValue("white", "")
  const globalColor = useColorModeValue("rgba(138, 138, 138, 1)", "white")

  useEffect(() => {
    !getUserInfo() ? navigate("login") : navigate("user_accounts")
  }, [])

  return (
    <Box textAlign="center" fontSize="md" bgColor={globalBgColor} color={globalColor}>
      {getUserInfo() && <Header />}

      {/* COMMENT: main body */}
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
          {children}
        </GridItem>
      </Grid>
    </Box>  
  )
}
