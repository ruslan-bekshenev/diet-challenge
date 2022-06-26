import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Paper } from '@mui/material'

import Auth from './pages/Auth'
import Main from './pages/Main'

function App() {
  return (
    <Paper sx={{ height: '100%', borderRadius: 0, background: '#121212' }}>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Paper>
  )
}

export default App
