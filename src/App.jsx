import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

// * Pages
import Login from './pages/public/Login'
import Chat from './pages/private/Chat'

function ChatGPT () {
  const [user, setUser] = useState(null)

  const login = () => {
    // request done
    setUser({
      id: 1,
      name: 'john',
      permission: ['analize'],
      roles: ['user']
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>

      {user
        ? (
          <button onClick={logout}>Logout</button>
          )
        : (
          <button onClick={login}>Login</button>
          )}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/chat'
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes('user')}
              redirecTo='/'
            >
              <Chat />
            </ProtectedRoute>
            }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default ChatGPT
