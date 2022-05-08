import { FC } from 'react'
import { Heading } from '@chakra-ui/react'
import { HeadingProps } from '@chakra-ui/layout/dist/declarations/src/heading'

const Logo: FC<HeadingProps> = (props) => {
  return (
    <Heading as="h2" size="3xl" textAlign="center" {...props}>
      Chatify
    </Heading>
  )
}

export default Logo
