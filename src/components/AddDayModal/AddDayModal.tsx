import React, { FC } from 'react'

import { Box, Modal, Typography } from '@mui/material'

export interface AddDayModalProps {
  open: boolean
  onClose: () => void
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#fff',
}

const AddDayModal: FC<AddDayModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Добавить день
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         adsasdфывфвфы
        </Typography>
      </Box>
    </Modal>
  )
}

export default AddDayModal
