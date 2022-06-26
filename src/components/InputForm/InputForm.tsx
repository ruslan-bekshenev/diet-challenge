import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { FormControl, TextField, TextFieldProps } from '@mui/material'

export interface InputFormProps extends Omit<TextFieldProps, 'name'> {
  name: string
  control: Control<any>
}

const InputForm: FC<InputFormProps> = ({ name, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <FormControl>
          <TextField {...rest} />
        </FormControl>
      )}
    />
  )
}

export default InputForm
