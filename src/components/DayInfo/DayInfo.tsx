import React, { FC } from 'react'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'

export interface FoodProps {
  id: string
  name: string
  calories: number
}

export interface MealsProps {
  id: string
  date: string | Date
  weight: number
  calories: number
  food: FoodProps
}

export interface DayInfoProps {
  id: string
  date: string | Date
  gym: boolean
  smoking: boolean
  meals: MealsProps[]
}

const DayInfo: FC<DayInfoProps> = ({ smoking, gym, meals }) => {
  console.log(meals)
  return (
    <Box sx={{ py: 2 }}>
      <Box display="flex" justifyContent="space-between">
        <Box width="100%">
          <Box px={2}>
            <Typography variant="h5">Питание за день:</Typography>
          </Box>
          <Box display="flex">
            <Box width="70%" padding={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Время</TableCell>
                      <TableCell align="right">Блюдо</TableCell>
                      <TableCell align="right">Граммы</TableCell>
                      <TableCell align="right">Калории</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(meals ?? []).map(({ id, weight, calories, date, food: { name } }) => (
                      <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {dayjs(date).format('HH:mm')}
                        </TableCell>
                        <TableCell align="right">{name}</TableCell>
                        <TableCell align="right">{weight}</TableCell>
                        <TableCell align="right">{calories}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box width="40%" padding={2}>
              <Typography variant="h6">Остальные данные за день:</Typography>
              <Box>
                <Typography>Курение: {smoking ? 'Да' : 'Нет'}</Typography>
                <Typography>Ходил в зал: {gym ? 'Да' : 'Нет'}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>2</Box>
      </Box>
    </Box>
  )
}

export default DayInfo
