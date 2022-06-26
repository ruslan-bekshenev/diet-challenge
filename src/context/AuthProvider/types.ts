export interface AuthProviderProps {
  children?: React.ReactNode
}

export type LoginProps = { email: string; password: string }

export type LoginResponse = { accessToken: string; refreshToken: string }

export interface AuthContextProps {
  signin?: (loginProps: LoginProps) => Promise<void>
  signup?: (loginProps: LoginProps) => Promise<void>
  authState?: LoginResponse
  isLoading: boolean
}
