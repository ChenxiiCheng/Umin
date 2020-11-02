import React, {useState} from 'react'
import { VStack, Box, HStack, useColorMode, useColorModeValue } from '@chakra-ui/core';
import {BsBarChart, BsTerminalFill, BsAward, BsCreditCard, BsClipboardData, BsPerson, BsShieldLock, BsBell, BsBootstrapReboot} from 'react-icons/bs'

const menuList = [
  {id: 1, name: '做题分析', icon: 'BsBarChart'},
  {id: 2, name: '进度管理', icon: 'BsTerminalFill'},
  {id: 3, name: '积分', icon: 'BsAward'},
  {id: 4, name: '优惠券', icon: 'BsCreditCard'},
  {id: 5, name: '订单', icon: 'BsClipboardData'},
  {id: 6, name: '个人资料', icon: 'BsPerson'},
  {id: 7, name: '账号安全', icon: 'BsShieldLock'},
  {id: 8, name: '通知与隐私', icon: 'BsBell'},
  {id: 9, name: '体验计划', icon: 'BsBootstrapReboot'},
]

const VectorIcon = (props: { iconName: string }): JSX.Element => {
  switch (props.iconName) {
    case 'BsBarChart': return <BsBarChart />
    case 'BsTerminalFill': return <BsTerminalFill />
    case 'BsAward': return <BsAward />
    case 'BsCreditCard': return <BsCreditCard />
    case 'BsClipboardData': return <BsClipboardData />
    case 'BsPerson': return <BsPerson />
    case 'BsShieldLock': return <BsShieldLock />
    case 'BsBell': return <BsBell />
    case 'BsBootstrapReboot': return <BsBootstrapReboot />
    default: return <BsBarChart />
  }
}

export const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [clickedNum, setClickedNum] = useState<number | undefined>()

  return (
    <VStack>
      {menuList.length && menuList.map(item => (
        <Box
          as="button"
          key={item.id}
          d="flex"
          justifyContent="flex-start"
          alignItems="center"
          p={4}
          fontSize={16}
          fontWeight={450}
          mt={6}
          w="100%"
          cursor="pointer"
          borderRadius="5px"
          _hover={{ color: "rgba(45, 181, 93, 1)", bgColor: colorMode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)" }}
          bgColor={clickedNum === item.id ? colorMode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)" : ""}
          color={clickedNum === item.id ? colorMode === "light" ? "rgba(45, 181, 93, 1)" : "rgba(45, 181, 93, 1)" : "rgba(140, 140, 140, 1)"}
          outline="none"
          onClick={() => setClickedNum(item.id)}>
          <HStack spacing={3}>
            <VectorIcon iconName={item.icon} />
            <Box as="span">
              {item.name}
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  )
}
