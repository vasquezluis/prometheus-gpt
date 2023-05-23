import { Navigate, Outlet } from 'react-router-dom'

// Component to protect routes
// Configuration come from App.jsx
function ProtectedRoute ({ isAllowed, redirecTo = '/', children }) {
  if (!isAllowed) return <Navigate to={redirecTo} />

  return children || <Outlet />
}

export default ProtectedRoute
