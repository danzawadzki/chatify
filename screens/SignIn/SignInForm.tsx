import { FC } from 'react'
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

interface SingInFormInputs {
  username: string
}

const SignInFormInputsSchema = yup
  .object({
    username: yup.string().min(8).required(),
  })
  .required()

const SingInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInFormInputs>({
    resolver: yupResolver(SignInFormInputsSchema),
  })

  const onSubmit: SubmitHandler<SingInFormInputs> = (data) => console.log(data)

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
