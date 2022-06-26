import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

import InputForm from '../../components/InputForm/InputForm'
import { useAuthContext } from '../../context/AuthProvider'
import { LoginProps } from '../../context/AuthProvider/types'

const Auth = () => {
  const { control, handleSubmit } = useForm<LoginProps>()
  const { signin } = useAuthContext()
  const handleAuth = (data: LoginProps): void => {
    signin(data)
  }
  console.log(process.env)
  return (
    <Container maxWidth="sm" sx={{ py: 10, height: '100%', alignItems: 'center', display: 'flex' }}>
      <Paper sx={{ width: '100%', padding: 10 }}>
        <form onSubmit={handleSubmit(handleAuth)}>
          <Grid
            container
            spacing={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <Typography variant="h4">Войти</Typography>
            </Grid>
            <Grid item xs={12} width="80%" justifyContent="center">
              <InputForm
                name="email"
                control={control}
                size="medium"
                label="E-mail"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} width="80%" justifyContent="center">
              <InputForm
                name="password"
                control={control}
                size="medium"
                label="Пароль"
                type="password"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} width="50%">
              <Button variant="contained" fullWidth type="submit">
                Войти
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
