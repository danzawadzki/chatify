import { FC } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import SingInForm from "./SignInForm";

const SingIn: FC = () => {
  return (
    <Flex width="100vw" height="100vh" align="center" justifyContent="center">
      <Box p={10} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box mb={2}>
          <Heading textAlign="center">Chatify</Heading>
        </Box>
        <SingInForm />
      </Box>
    </Flex>
  );
};

export default SingIn;
