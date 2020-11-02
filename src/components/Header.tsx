import React from 'react'
import { Text, Link, Button, HStack, Box, Avatar, AvatarBadge, Image, useColorModeValue } from '@chakra-ui/core'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { MdBookmarkBorder, MdControlPoint } from 'react-icons/md'
import { BsClipboardData, BsBell } from 'react-icons/bs'

const navigationLinks = [
  {id: 1, name: '探索', 'url': 'https://www.chenxii.xyz'},
  {id: 2, name: '题库', 'url': 'https://www.chenxii.xyz'},
  {id: 3, name: '讨论', 'url': 'https://www.chenxii.xyz'},
  {id: 4, name: '竞赛', 'url': 'https://www.chenxii.xyz'},
  {id: 5, name: '企业', 'url': 'https://www.chenxii.xyz'},
]

const newFeatureLinkImage = "https://assets.leetcode-cn.com/support/new.svg"

export const Header = () => {
  const navigationBarBg = useColorModeValue("white", "#1A202C")
  const navigationBarColor = useColorModeValue("rgba(38, 38, 38, 1)", "white")
  const navigationBarBorderBottom = useColorModeValue("rgba(240, 240, 240, 1)", "#2D3748")

  return (
    <Box borderBottom={`1px solid ${navigationBarBorderBottom}`} fontSize="sm" fontWeight="450" color={navigationBarColor} bg={navigationBarBg} data-testid="navigationBar">
      <Box d="flex" justifyContent="space-between" flexWrap="nowrap" minW="992px" maxW="1200px" w="100%" mx="auto" px="20px" py="6px" position="relative">
        <HStack spacing="30px" data-testid="links">
          {navigationLinks.map(link => (
            <Link key={link.id} href={link.url} isExternal _hover={{textColor: 'rgba(34, 34, 34, 1)', fontWeight: 400}}>
              <Text cursor="pointer">{link.name}</Text>
            </Link>
          ))}
        </HStack>
        <HStack spacing="30px">
          <Button size="sm" leftIcon={<MdBookmarkBorder />} colorScheme="teal" variant="outline" cursor="pointer" data-testid="btn__download">下载App</Button>
          <Button size="sm" leftIcon={<MdControlPoint />} colorScheme="yellow" variant="outline" cursor="pointer" data-testid="btn__premium">Plus会员</Button>
          {/* FIXME: hover not working for the icon */}
          <Box _hover={{color: "blue", stroke: 'blue'}}>
            <BsClipboardData size={18} cursor="pointer" color="rgba(140, 140, 140, 1)" data-testid="icon__clipboard" />
          </Box>
          <Box _hover={{color: "rgba(89, 89, 89, 1)"}}>
            <BsBell size={18} cursor="pointer" color="rgba(140, 140, 140, 1)" data-testid="icon__bell" />
          </Box>
          <Avatar size="xs" cursor="pointer" data-testid="avatar"><AvatarBadge boxSize="1em" bg="green.500" /></Avatar>
          <ColorModeSwitcher/>
        </HStack> 
        <Image src={newFeatureLinkImage} alt="new feature" position="absolute" right="510px" top="-9px" cursor="pointer" transition="all 0.3s" _hover={{ top: "-3px" }} />
      </Box>
    </Box>
  )
}
