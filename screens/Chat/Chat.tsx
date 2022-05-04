import { FC } from 'react'
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  theme,
  Tooltip,
} from '@chakra-ui/react'
import ChatMessageForm from './ChatMessageForm'

const MESSAGES: {
  message: string
  isYou: boolean
  user: {
    avatar: string
    name: string
  }
}[] = [
  {
    message: 'Hi, how are you doing?',
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: true,
    user: {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Ram',
    },
  },
  {
    message:
      "The weather is very good. The sun is shining 20 hours a day, we haven't had rain in six months, and the Teslas are driving like crazy.",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: true,
    user: {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Ram',
    },
  },
  {
    message:
      "The weather is very good. The sun is shining 20 hours a day, we haven't had rain in six months, and the Teslas are driving like crazy.",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: true,
    user: {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Ram',
    },
  },
  {
    message:
      "The weather is very good. The sun is shining 20 hours a day, we haven't had rain in six months, and the Teslas are driving like crazy.",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: true,
    user: {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Ram',
    },
  },
  {
    message:
      "The weather is very good. The sun is shining 20 hours a day, we haven't had rain in six months, and the Teslas are driving like crazy.",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: false,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'Daniel',
    },
  },
  {
    message:
      "Everything's great, what's up? How's the weather in san francisco?",
    isYou: true,
    user: {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Ram',
    },
  },
]

const Chat: FC = () => {
  console.log(theme)
  return (
    <Flex width="100vw" height="100vh" align="center" justifyContent="center">
      <Grid
        templateColumns="auto 300px"
        templateRows="auto 200px"
        width="100%"
        height="100%"
      >
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
            {MESSAGES.map(({ message, isYou, user }, index) => (
              <Flex key={index} direction={isYou ? 'row-reverse' : 'row'}>
                <Tooltip hasArrow label={user.name}>
                  <Avatar name={user.name} src={user.avatar} />
                </Tooltip>
                <Flex
                  mx={2}
                  p={2}
                  backgroundColor={isYou ? 'gray.600' : 'blue.400'}
                  borderRadius={6}
                  alignItems="center"
                >
                  {message}
                </Flex>
              </Flex>
            ))}
          </Stack>
        </GridItem>
        <GridItem
          h="100%"
          borderLeft={1}
          borderColor="gray.700"
          borderStyle="solid"
          rowSpan={2}
        >
          Sidebar
        </GridItem>
        <GridItem h="100%">
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
