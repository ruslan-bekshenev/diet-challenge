import React from 'react'

import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'

const Auth = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 10, height: '100%', alignItems: 'center', display: 'flex' }}>
      <Paper sx={{ width: '100%', padding: 10 }}>
        <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
          <Grid>
            <Typography variant="h4">Войти</Typography>
          </Grid>
          <Grid item xs={24} maxWidth="300px">
            <TextField label="Email" fullWidth></TextField>
          </Grid>
          <Grid item>
            <TextField size="medium" label="Пароль" type="password" fullWidth></TextField>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Войти
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Auth
