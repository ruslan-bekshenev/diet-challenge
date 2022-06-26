import React, { createContext, FC, useContext, useState } from 'react'

import { instance } from '../../api/axios.config'

export interface AuthProviderProps {
  children?: React.ReactNode
}

const AuthContext = createContext({})

export enum EAuthPaths {
  SIGN_IN = '/auth/signin',
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState({})

  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data } = await instance.post(EAuthPaths.SIGN_IN, { email, password })
    } catch (e) {
      console.error(e)
    }
  }
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
