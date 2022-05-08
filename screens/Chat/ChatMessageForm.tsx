import { FC } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'core/context/Auth.context'

interface ChatMessageFormInputs {
  message: string
}

const ChatMessageFormInputsSchema = yup
  .object({
    message: yup.string().min(1).required(),
  })
  .required()

const ChatMessageForm: FC = () => {
  const { username } = useAuth()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChatMessageFormInputs>({
    resolver: yupResolver(ChatMessageFormInputsSchema),
  })

  const onSubmit: SubmitHandler<ChatMessageFormInputs> = ({ message }) => {
    axios.post('/api/send-message', {
      message,
      username,
    })
    return reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mt={4} mb={4} isInvalid={Boolean(errors?.message)}>
        <Textarea id="password" size="lg" {...register('message')} />
        {errors?.message?.message && (
          <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button
        colorScheme="teal"
        variant="solid"
        type="submit"
        isFullWidth
        isLoading={isSubmitting}
      >
        Send
      </Button>
    </form>
  )
}

export default ChatMessageForm
