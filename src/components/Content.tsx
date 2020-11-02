import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core';

export const Content = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      mt={6}
      p={5}
      bgColor={colorMode === "light" ? "rgba(255, 255, 255, 1)" : "rgba(29, 37, 53, 1)"}
      color={colorMode === "light" ? "#1A202C" : "rgba(219, 219, 219, 1)"} fontSize="lg"
      fontWeight="450"
      boxShadow={colorMode === "light" ? "0px 1px 5px rgba(0, 0, 0, 0.1)" : "0 1px 7px rgba(0, 0, 0, 0.3)"}
    >
      hello
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio commodi voluptate cumque, quod rerum quasi iure maxime eaque fuga voluptatibus voluptates voluptatum. Consequatur ab veritatis consectetur assumenda dignissimos in obcaecati ratione, pariatur quidem enim architecto, illo error itaque, at adipisci distinctio laboriosam impedit sed qui iure neque ipsa a! Fugiat enim, sunt odio mollitia veniam ipsum! Commodi, vel quae a nesciunt, quam temporibus possimus reprehenderit maiores veniam magni excepturi totam? Maxime minus sequi distinctio non consectetur earum harum exercitationem, nesciunt optio eaque unde? Reprehenderit esse architecto aut. Accusamus aspernatur esse nulla voluptatum dicta illo reprehenderit beatae voluptatem, sunt facilis dolore?
    </Box>
  )
}
