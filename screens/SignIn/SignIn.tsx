import { FC } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Logo from 'shared/Logo/Logo'
import SingInForm from './SignInForm'

const SingIn: FC = () => {
  return (
    <Flex width="100vw" height="100vh" align="center" justifyContent="center">
      <Box>
        <Logo />
        <Box borderWidth={1} borderRadius={8} boxShadow="lg" p={10} mt={6}>
          <SingInForm />
        </Box>
      </Box>
    </Flex>
  )
}

export default SingIn
