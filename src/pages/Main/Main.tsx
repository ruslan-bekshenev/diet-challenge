import React from 'react'

import { AppBar, Box, Paper, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'

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
        <Paper>asd</Paper>
      </Container>
    </div>
  )
}

export default Main
