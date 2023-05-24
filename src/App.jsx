import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

// * Pages
import Login from './pages/public/Login'
import Chat from './pages/private/Chat'

function ChatGPT () {
  const [user, setUser] = useState(null)

  // function to login user
  const login = () => {
    // request done
    setUser({
      id: 1,
      name: 'john',
      permission: ['analize'],
      roles: ['user']
    })
  }

  // function to logout user
  const logout = () => setUser(null)

  return (
    <BrowserRouter>
      {/* {user
        ? (
          <button onClick={logout}>Logout</button>
          )
        : (
          <button onClick={login}>Login</button>
          )} */}

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route
          path='/chat'
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes('user')}
              redirecTo='/'
            >
              <Chat />
            </ProtectedRoute>
            }
        /> */}
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ChatGPT
