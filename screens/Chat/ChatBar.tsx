import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Show, Text } from '@chakra-ui/react'
import { useAuth } from 'core/context/Auth.context'
import Logo from 'shared/Logo/Logo'

const ChatBar: FC = () => {
  const { username, logout } = useAuth()
  const { push } = useRouter()

  const onLogoutClick = async () => {
    logout()
    await push('/')
  }

  return (
    <Box
      py={2}
      px={6}
      borderBottom={1}
      borderColor="gray.700"
      borderStyle="solid"
      display="flex"
      justifyContent="space-between"
    >
      <Logo size="xl" />
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Show above="md">
          <Text display="flex">Hello, you are logged as</Text>
        </Show>
        <Text as="h2" fontWeight="bold" ml={1}>
          {username || ''}
        </Text>
        <Button
          colorScheme="red"
          variant="outline"
          onClick={onLogoutClick}
          ml={3}
        >
          Logout
        </Button>
      </Box>
    </Box>
  )
}

export default ChatBar
