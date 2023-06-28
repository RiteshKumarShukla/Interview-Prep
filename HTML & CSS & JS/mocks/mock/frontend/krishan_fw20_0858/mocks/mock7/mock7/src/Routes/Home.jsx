import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Flex justifyContent={'space-evenly'} padding='1rem' bgColor={'black'} color='white'>
    <Text>Welcome to Stock Broker</Text>
    <Link to={'/register'}>Register</Link>
    <Link to={'/login'}>Login</Link>
    </Flex>
    </>
  )
}

export default Home