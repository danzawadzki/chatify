import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type AuthContextState = {
  username?: string
  setUsername: Dispatch<SetStateAction<string | undefined>>
  logout: () => void
}

type AuthContextProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextState>({
  setUsername: () => {},
  logout: () => {},
})

const AuthProvider: FC<AuthContextProps> = ({ children }) => {
  const [username, setUsername] = useState<string>()

  const logout = () => setUsername(undefined)

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
