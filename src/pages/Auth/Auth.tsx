import React from 'react'
import { useForm } from 'react-hook-form'

import { LoadingButton } from '@mui/lab'
import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

import InputForm from '../../components/InputForm/InputForm'
import { useAuthContext } from '../../context/AuthProvider'
import { LoginProps } from '../../context/AuthProvider/types'

const Auth = () => {
  const { control, handleSubmit } = useForm<LoginProps>({
    defaultValues: {
      email: 'rbekshenev23@gmail.com',
      password: 'Steeki2323@@@',
    },
  })
  const { signin, isLoading } = useAuthContext()
  const handleAuth = (data: LoginProps): void => {
    signin?.(data)
  }
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </Grid>

            <Grid item xs={12} width="50%">
              <LoadingButton variant="contained" fullWidth type="submit" loading={isLoading}>
                Войти
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
