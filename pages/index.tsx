import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex width="100vw" height="100vh" align="center" justifyContent="center">
      <Heading textAlign="center">Chatify</Heading>
    </Flex>
  )
}

export default Home
