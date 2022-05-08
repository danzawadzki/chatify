import { FC } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from 'core/context/Auth.context'

interface SingInFormInputs {
  username: string
}

const SignInFormInputsSchema = yup
  .object({
    username: yup.string().min(3).required(),
  })
  .required()

const SingInForm: FC = () => {
  const { setUsername } = useAuth()
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInFormInputs>({
    resolver: yupResolver(SignInFormInputsSchema),
  })

  const onSubmit: SubmitHandler<SingInFormInputs> = async (data) => {
    setUsername(data.username)
    await push('/chat')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors?.username)} mb={2}>
        <FormLabel htmlFor="email">Username</FormLabel>
        <Input id="email" size="lg" {...register('username')} />
        {errors?.username?.message && (
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button
        colorScheme="teal"
        variant="solid"
        size="lg"
        type="submit"
        isFullWidth
        isLoading={isSubmitting}
      >
        Sign in
      </Button>
    </form>
  )
}

export default SingInForm
