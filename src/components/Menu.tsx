import React, {useState, useEffect, useContext, createContext, Dispatch, SetStateAction} from 'react'
import { VStack, Box, HStack, useColorMode, Divider, ColorMode } from '@chakra-ui/core';
import {BsBarChart, BsTerminalFill, BsAward, BsCreditCard, BsClipboardData, BsPerson, BsShieldLock, BsBell, BsBootstrapReboot} from 'react-icons/bs'

interface IMenuItem {
  key: string
  name: string
  icon: string
}

interface IMenuItemProps {
  item: IMenuItem
}

interface IMenuListSection  {
  section: IMenuItem[]
}

interface IMenuContext {
  colorMode: ColorMode
  clickedItem: string
  setClickedItem: Dispatch<SetStateAction<string>>
}

// * Mock menu list data
const menuList: IMenuItem[][] = [
  [
    {key: 'analysis', name: '做题分析', icon: 'BsBarChart'},
    {key: 'progress', name: '进度管理', icon: 'BsTerminalFill'},
  ],
  [
    {key: 'points', name: '积分', icon: 'BsAward'},
    {key: 'coupon', name: '优惠券', icon: 'BsCreditCard'},
    {key: 'order', name: '订单', icon: 'BsClipboardData'},
  ],
  [
    {key: 'account', name: '个人资料', icon: 'BsPerson'},
    {key: 'security', name: '账号安全', icon: 'BsShieldLock'},
    {key: 'notification', name: '通知与隐私', icon: 'BsBell'},
    {key: 'plan', name: '体验计划', icon: 'BsBootstrapReboot'},
  ]
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

const MenuListSection = (props: IMenuListSection) => {
  const { section } = props;

  return (
    <>
      {section && section.map((item, index) => (<MenuItem key={index} item={item} />))}
      <Divider />
    </>
  )
}

const MenuItem = (props: IMenuItemProps) => {
  const { item } = props;
  const {colorMode, clickedItem, setClickedItem} = useContext(MenuListContext)

  return (
    <Box
      as="button"
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
      bgColor={clickedItem === item.key ? colorMode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)" : ""}
      color={clickedItem === item.key ? colorMode === "light" ? "rgba(45, 181, 93, 1)" : "rgba(45, 181, 93, 1)" : "rgba(140, 140, 140, 1)"}
      outline="none"
      onClick={() => setClickedItem(item.key)}>
      <HStack spacing={3}>
        <VectorIcon iconName={item.icon} />
        <Box as="span">
          {item.name}
        </Box>
      </HStack>
    </Box>
  )
}

const MenuListContext = createContext({} as IMenuContext)
export const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [clickedItem, setClickedItem] = useState<string>('')
  const [menuTreeNodes, setMenuTreeNodes] = useState<JSX.Element[] | null>(null)

  useEffect(() => {
    const menuTree = menuList.length !== 0 ? renderMenuList(menuList) : null
    setMenuTreeNodes(menuTree)
  }, [])

  const renderMenuList = (menuListData: IMenuItem[][]): JSX.Element[] => {
    return menuListData.map((section, sectionKey) => (<MenuListSection key={sectionKey} section={section} />))
  }

  return (
    <MenuListContext.Provider value={{colorMode, clickedItem, setClickedItem}}>
      <VStack>
        {menuTreeNodes}
      </VStack>
    </MenuListContext.Provider>
  )
}
