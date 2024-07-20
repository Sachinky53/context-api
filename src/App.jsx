import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
export default function App() {
  return (
    <div>
      <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
      
      </UserContextProvider>
    </div>
  )
}
