import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute ({ isAllowed, redirecTo = '/', children }) {
  if (!isAllowed) return <Navigate to={redirecTo} />

  return children || <Outlet />
}

export default ProtectedRoute
