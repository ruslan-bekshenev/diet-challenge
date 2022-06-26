import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Paper } from '@mui/material'

import { instance } from './api/axios.config'
import Auth from './pages/Auth'
import Main from './pages/Main'

function App() {

  return (
    <Paper sx={{ height: '100%', borderRadius: 0, background: '#121212' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Auth />} />
            <Route path="/main" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Paper>
  )
}

export default App
