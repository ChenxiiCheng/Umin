import React, { useState, useEffect } from 'react'
import { Link, useNavigate, RouteComponentProps, WindowLocation } from '@reach/router';
import { useMutation } from '@apollo/client';
import { Box, Text, Heading, InputGroup, InputLeftAddon, Input, Button, FormControl, useColorModeValue, InputRightElement, useToast } from '@chakra-ui/core';
import {FaRegEnvelope, FaRegEye, FaRegEyeSlash, FaRegStar} from 'react-icons/fa'

import { LOGIN, REGISTER } from '../graphql/user';

interface IProps extends RouteComponentProps {
  type: 'register' | 'login',
}

interface LoginPayload {
  email: string
  nickname?: string
  password: string
}

export const AccountCard: React.FC<IProps> = ({ type, location }) => {
  const navigate = useNavigate()
  const toast = useToast()
  const [login, { error: loginMutaionError, loading: loginLoading }] = useMutation(LOGIN)
  const [register, {error: registerMutaionError, loading: registerLoading}] = useMutation(REGISTER)
  const cardBgColor = useColorModeValue('white', 'rgba(26, 33, 46, 0.8)')
  const textColor = useColorModeValue('#1A202C', 'white')
  const boxShadowMode = useColorModeValue('md', '2px 4px 6px -1px rgba(250,255,255,0.1), 0px 2px 4px -1px rgba(255,255,255,0.1)')
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [nicknameError, setNicknameError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // * listen graphql response error
  useEffect(() => {
    if (typeof loginMutaionError !== "undefined" || typeof registerMutaionError !== "undefined") {
      const errorMsg = (loginMutaionError ? loginMutaionError?.graphQLErrors[0].message : "") || (registerMutaionError ? registerMutaionError?.graphQLErrors[0].message : "")
      toast({
        title: "Failed",
        status: "error",
        description: errorMsg,
        duration: 2500,
        position: "top",
        isClosable: true
      })
    }
  }, [loginMutaionError, registerMutaionError])

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let emailError = false, passwordError = false, nicknameError = false
    if (!email || !email.includes('@')) {
      emailError = true
      setEmailError(true)
      toast({
        title: "Error",
        description: "Please enter valid email address",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true
      })
    }
    if (!password) {
      passwordError = true
      setPasswordError(true)
      toast({
        title: "Error",
        description: "Please enter correct password",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true
      })
    }
    if (type === "register" && (!nickname || nickname.length < 4)) {
      nicknameError = true
      setNicknameError(true)
      toast({
        title: "Warning",
        description: "Minimum length of nickname is 4",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true
      })
    }

    const payload: LoginPayload = {
      email: email,
      password: password
    }

    if (nickname) {
      payload.nickname = nickname
    }

    // * call login or register backend endpoint
    if (!emailError && !passwordError && !nicknameError) {
      if (type === "login") {
        login({ variables: { user: payload } }).then(() => {
          navigate("/")
          toast({
            title: "Login Success",
            status: "success",
            duration: 2500,
            position: "top",
            isClosable: true
          })
        }).catch(() => {
          // * 想获取后端具体返回的错误信息，use exposed error state
          navigate("/login")
        })
      } else {
        register({ variables: { user: payload } }).then((res) => {
          navigate("/login")
          toast({
            title: "Register Success",
            status: "success",
            description: "Registered success, now please login in.",
            duration: 2500,
            position: "top",
            isClosable: true
          })
        }).catch(() => {
          navigate("/register")
        })
      }
    }
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        shadow={boxShadowMode}
        borderWidth="1px"
        borderRadius="md"
        p={10}
        pt={9}
        minW={530}
        minH={type === 'login' ? 400 : 450}
        maxW={600}
        maxH={600}
        color={textColor}
        background={cardBgColor}
        fontSize="lg"
        fontWeight="450"
      >
        <Heading as="h2" size="xl">
          {type === "login" ? "Sign In" : "Sign Up"}
        </Heading>
        <Text color={textColor} _hover={{color: "gray.500"}}>
          {type === "login" ? 
            <Link to="/register">😱 Do not have an account?</Link>
          : <Link to="/login">🔥 Already have an account?</Link>}
        </Text>
        <InputGroup mt={3}>
          <InputLeftAddon
            pointerEvents="none"
            children={<FaRegEnvelope color="gray.300" />}
          />
          <FormControl isRequired>
            <Input
              type="text"
              pl="20px"
              focusBorderColor="gray.300"
              isInvalid={emailError === true ? true: false}
              errorBorderColor={emailError === true ? "red.300" : ""}
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </FormControl>
        </InputGroup>
        {/* COMMENT: regster form has one extra input - Nickname */}
        {type === 'register' ? (
          <InputGroup>
            <InputLeftAddon
              pointerEvents="none"
              children={<FaRegStar color="gray.300" />}
            />
            <FormControl isRequired>
              <Input
                type="text"
                pl="20px"
                focusBorderColor="gray.300"
                isInvalid={nicknameError === true ? true: false}
                errorBorderColor={nicknameError === true ? "red.300" : ""}
                placeholder="Nickname"
                value={nickname}
                onChange={(event) => setNickname(event.currentTarget.value)}
              />
            </FormControl>
          </InputGroup>
        ) : null}
        <InputGroup>
          <InputLeftAddon
            pointerEvents="none"
            children={showPassword ? <FaRegEye color="gray.300" /> : <FaRegEyeSlash color="gray.300" />}
          />
          <FormControl isRequired>
            <Input
              type={showPassword ? "text" : "password"}
              focusBorderColor="gray.300"
              pl="20px"
              isInvalid={passwordError === true ? true: false}
              errorBorderColor={passwordError === true ? "red.300" : ""}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </FormControl>
          <InputRightElement>
            <Button
              h="2rem"
              w="3rem"
              size="md"
              mr={2}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Text color="gray.500">{showPassword ? "Hide" : "Show"}</Text>
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button color={textColor} w="100%" type="submit" isLoading={loginLoading || registerLoading}>
          {type === "login" ? "Sign In" : "Sign Up"}
        </Button>
      </Box> 
    </form>
  )
}
