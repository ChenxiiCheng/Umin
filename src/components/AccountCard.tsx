import React, {useState} from 'react'
import { Box, Text, Heading, InputGroup, InputLeftAddon, Input, Button, useColorModeValue, InputRightElement } from '@chakra-ui/core';
import {FaRegEnvelope, FaRegEye, FaRegEyeSlash, FaRegStar} from 'react-icons/fa'

interface IProps {
  type: 'register' | 'login'
}

export const AccountCard: React.FC<IProps> = ({ type }) => {
  const cardBgColor = useColorModeValue('white', 'rgba(255, 255, 255, 0.01)')
  const textColor = useColorModeValue('#1A202C', 'white')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [nicknameError, setNicknameError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      shadow="md"
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
      <Text color={textColor}>
        {type === "login" ? "Do not have an account?" : "Already have an account ?"}
      </Text>
      <InputGroup mt={3}>
        <InputLeftAddon
          pointerEvents="none"
          children={<FaRegEnvelope color="gray.300" />}
        />
        <Input
          type="text"
          pl="20px"
          focusBorderColor="gray.300"
          isInvalid={emailError === true ? true: false}
          errorBorderColor={emailError === true ? "red.300" : ""}
          placeholder="Email"
        />
      </InputGroup>
      {/* COMMENT: regster form has one extra input - Nickname */}
      {type === 'register' ? (
        <InputGroup>
          <InputLeftAddon
            pointerEvents="none"
            children={<FaRegStar color="gray.300" />}
          />
          <Input
            type="text"
            pl="20px"
            focusBorderColor="gray.300"
            isInvalid={nicknameError === true ? true: false}
            errorBorderColor={nicknameError === true ? "red.300" : ""}
            placeholder="Nickname"
          />
        </InputGroup>
      ) : null}
      <InputGroup>
        <InputLeftAddon
          pointerEvents="none"
          children={showPassword ? <FaRegEye color="gray.300" /> : <FaRegEyeSlash color="gray.300" />}
        />
        <Input
          type={showPassword ? "text" : "password"}
          focusBorderColor="gray.300"
          pl="20px"
          isInvalid={passwordError === true ? true: false}
          errorBorderColor={passwordError === true ? "red.300" : ""}
          placeholder="Password"
        />
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
      <Button color={textColor} w="100%">
        {type === "login" ? "Sign In" : "Sign Up"}
      </Button>
    </Box>
  )
}
