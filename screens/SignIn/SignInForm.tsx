import { FC } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SingInFormInputs {
  email: string;
  password: string;
}

const SignInFormInputsSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const SingInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<SingInFormInputs>({
    resolver: yupResolver(SignInFormInputsSchema),
  });

  const onSubmit: SubmitHandler<SingInFormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors?.email)}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" size="lg" {...register("email")} />
        {errors?.email?.message && (
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt={4} mb={4} isInvalid={Boolean(errors?.password)}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          size="lg"
          placeholder="*********"
          {...register("password")}
        />
        {errors?.password?.message && (
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
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
  );
};

export default SingInForm;
