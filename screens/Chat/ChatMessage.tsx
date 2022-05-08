import { FC } from 'react'
import { Avatar, Flex, Tooltip } from '@chakra-ui/react'
import { Message } from 'core/types/Message'

type ChatMessageProps = Message & {
  isYours: boolean
}

const ChatMessage: FC<ChatMessageProps> = ({ username, message, isYours }) => {
  return (
    <Flex direction={isYours ? 'row-reverse' : 'row'}>
      <Tooltip hasArrow label={username}>
        <Avatar name={username} />
      </Tooltip>
      <Flex
        mx={2}
        p={2}
        backgroundColor={isYours ? 'gray.600' : 'blue.400'}
        borderRadius={6}
        alignItems="center"
      >
        {message}
      </Flex>
    </Flex>
  )
}

export default ChatMessage
