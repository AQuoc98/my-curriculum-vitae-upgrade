import Login from 'features/authentication/login'
import Dashboard from 'features/dash-board'
import Home from 'features/home'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from 'routes/private-route'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
