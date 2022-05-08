import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Grid, GridItem, Stack, theme } from '@chakra-ui/react'
import { useAuth } from 'core/context/Auth.context'
import { PusherClient } from 'core/lib/Pusher'
import { isMessage } from 'core/utils/typeguards'
import ChatBar from './ChatBar'
import ChatMessage from './ChatMessage'
import ChatMessageForm from './ChatMessageForm'

const Chat: FC = () => {
  const { push } = useRouter()
  const { username } = useAuth()
  const [messages, setMessages] = useState<
    { message: string; username: string }[]
  >([])

  useEffect(() => {
    const channel = PusherClient.subscribe(
      process.env.NEXT_PUBLIC_PUSHER_CHANNEL!
    )

    channel.bind(
      'message',
      (data: unknown) =>
        isMessage(data) &&
        setMessages((prevMessages) => [...prevMessages, data])
    )

    return () => {
      PusherClient.unsubscribe('channel_name1')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!username) {
      push('/')
    }
  }, [username, push])

  return (
    <Flex width="100vw" height="100vh" align="center" justifyContent="center">
      <Grid
        templateColumns="auto"
        templateRows="auto 1fr auto"
        width="100%"
        height="100%"
      >
        <GridItem>
          <ChatBar />
        </GridItem>
        <GridItem
          h="100%"
          backgroundColor="gray.900"
          overflow="overlay"
          css={{
            '&::-webkit-scrollbar': {
              width: 8,
            },
            '&::-webkit-scrollbar-track': {
              width: 8,
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.colors.gray[600],
              borderRadius: '24px',
            },
          }}
        >
          <Stack p={4}>
            {messages.map((item, index) => (
              <ChatMessage
                key={index}
                username={item.username}
                message={item.message}
                isYours={item.username === username}
              />
            ))}
          </Stack>
        </GridItem>
        <GridItem>
          <Box
            py={2}
            px={5}
            borderTop={1}
            borderColor="gray.700"
            borderStyle="solid"
          >
            <ChatMessageForm />
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Chat
