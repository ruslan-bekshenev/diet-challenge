import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export interface ProtectedRouteProps {
  isAllowed?: boolean
  redirectPath?: string
  children: React.ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectPath = '',
  children,
}): any => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
