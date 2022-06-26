import { useEffect } from 'react'

import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material'
import { Box } from '@mui/system'

import { instance } from '../../api/axios.config'

const Meals = () => {
  useEffect(() => {
    instance.get('/meal')
  }, [])
  return (
    <div>
      <Box>
        <Fab variant="extended" size="small" color="primary" aria-label="add" sx={{ padding: 1 }}>
          <AddIcon sx={{ mr: 1 }} />
          Добавить день
        </Fab>
      </Box>
    </div>
  )
}

export default Meals
