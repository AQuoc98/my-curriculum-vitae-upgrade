import Header from 'components/header'
import Login from 'features/authentication/login'
import Dashboard from 'features/dash-board'
import Home from 'features/home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from 'routes/private-route'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
