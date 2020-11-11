import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core';
import { Table, Tag, Space } from 'antd';

interface IColumn {
  title: string;
  dataIndex?: string;
  key: string;
  render?: (key: string | string[]) => JSX.Element
}

const mockData = [
  {
    key: '1',
    id: 1,
    email: 'test@test.com',
    nickname: 'test',
    tags: ['isActive', 'adminUser'],
  },
  {
    key: '2',
    id: 2,
    email: 'test1@test.com',
    nickname: 'test1',
    tags: ['isActive'],
  },
  {
    key: '3',
    id: 3,
    email: 'test2@test.com',
    nickname: 'test2',
    tags: ['isActive'],
  },
  {
    key: '4',
    id: 4,
    email: 'test3@test.com',
    nickname: 'test3',
    tags: ['isActive', 'superUser'],
  },
  {
    key: '5',
    id: 5,
    email: 'test4@test.com',
    nickname: 'test4',
    tags: ['isActive', 'adminUser'],
  },
  {
    key: '6',
    id: 6,
    email: 'test5@test.com',
    nickname: 'test5',
    tags: ['isActive'],
  },
  {
    key: '6',
    id: 6,
    email: 'test5@test.com',
    nickname: 'test5',
    tags: ['isActive', 'superUser'],
  },
];

export const Content = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const columns: IColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Nickname',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {(tags as string[]).map(tag => {
            let color = tag.length > 2 ? 'geekblue' : 'green';
            if (tag === 'adminUser') {
              color = 'volcano';
            } else if (tag === 'superUser') {
              color = 'purple'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Box
      mt={6}
      p={5}
      bgColor={colorMode === "light" ? "rgba(255, 255, 255, 1)" : "rgba(29, 37, 53, 1)"}
      color={colorMode === "light" ? "#1A202C" : "rgba(219, 219, 219, 1)"} fontSize="lg"
      fontWeight="450"
      boxShadow={colorMode === "light" ? "0px 1px 5px rgba(0, 0, 0, 0.1)" : "0 1px 7px rgba(0, 0, 0, 0.3)"}
    >
      <Table columns={columns} dataSource={mockData} />
    </Box>
  )
}
