import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from 'core/context/Auth.context'
import theme from 'core/theme/theme'
import 'core/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
