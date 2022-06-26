import React, { createContext, FC, useContext, useState } from 'react'

import { instance } from '../../api/axios.config'

import { AuthProviderProps, LoginProps } from './types'

const AuthContext = createContext<any>({})

export enum EAuthPaths {
  SIGN_IN = '/auth/signin',
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState({})

  const signin = async (loginProps: LoginProps) => {
    const { email, password } = loginProps
    try {
      const { data } = await instance.post(EAuthPaths.SIGN_IN, { email, password })
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
