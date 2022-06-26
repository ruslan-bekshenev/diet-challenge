import React, { useEffect } from 'react'

import { AppBar, Box, Paper, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'

import { instance } from '../../api/axios.config'

const Main = () => {
  useEffect(() => {
    instance.get('http://localhost:8080/api/meal')
  }, [])
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Diet challenge
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md" sx={{ padding: 4 }}>
        <Paper sx={{ padding: 4 }}></Paper>
      </Container>
    </div>
  )
}

export default Main
