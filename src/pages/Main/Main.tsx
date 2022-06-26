import React from 'react'

import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'

import Meals from '../../components/Meals'

const Main = () => {
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
        <Meals />
      </Container>
    </div>
  )
}

export default Main
