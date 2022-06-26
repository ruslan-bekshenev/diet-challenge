import React, { createContext, FC, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import storage from 'store2'

import { instance } from '../../api/axios.config'

import { AuthContextProps, AuthProviderProps, LoginProps, LoginResponse } from './types'
const AuthContext = createContext<AuthContextProps>({
  isLoading: false,
})

export enum EAuthPaths {
  SIGN_IN = '/auth/signin',
  SIGN_UP = '/auth/signup',
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [authState, setAuthState] = useState<LoginResponse>({
    refreshToken: '',
    accessToken: '',
  })

  const signin = async (loginProps: LoginProps) => {
    const { email, password } = loginProps
    setIsLoading(true)
    try {
      const { data } = await instance.post<LoginResponse>(EAuthPaths.SIGN_IN, { email, password })
      storage.set('accessToken', data.accessToken)
      storage.set('refreshToken', data.refreshToken)
      setAuthState(data)
      navigate('./main')
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (regProps: LoginProps) => {
    const { email, password } = regProps
    try {
      const { data } = await instance.post<LoginResponse>(EAuthPaths.SIGN_UP, { email, password })
      storage.set('accessToken', data.accessToken)
      storage.set('refreshToken', data.refreshToken)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        authState,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
