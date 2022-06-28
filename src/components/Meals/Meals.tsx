import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import AddIcon from '@mui/icons-material/Add'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Fab,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import dayjs from 'dayjs'

import { instance } from '../../api/axios.config'
import AddDayModal from '../AddDayModal'
import DayInfo from '../DayInfo'
import { DayInfoProps } from '../DayInfo/DayInfo'

const Meals = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [expanded, setExpanded] = useState<string | false>(false)
  const [date, setDate] = useState<string>()
  const { isLoading, error, data } = useQuery('healthy-day', () =>
    instance.get('/healthy-day').then((data) => data.data),
  )
  const {
    data: day,
    refetch,
    isLoading: isLoadingItem,
  } = useQuery<DayInfoProps>(
    'healthy-day-item',
    () => instance.get(`/healthy-day/${date}`).then((data) => data.data),
    { enabled: false },
  )
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
    if (isExpanded) {
      setDate(panel)
    }
  }

  useEffect(() => {
    if (date) {
      refetch()
    }
  }, [date, refetch])

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          sx={{ px: 2, py: 2 }}
          onClick={() => handleOpen()}
        >
          <AddIcon sx={{ mr: 1 }} />
          Добавить день
        </Fab>
        <AddDayModal open={open} onClose={handleClose} />
      </Box>
      <Box>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <>
            {data.map((item: any) => (
              <Accordion expanded={expanded === item.date} onChange={handleChange(item.date)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {dayjs(item.date).format('DD.MM.YYYY')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
                  {isLoadingItem ? (
                    <Box sx={{ display: 'flex' }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <>{day && <DayInfo {...day} />}</>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </Box>
    </div>
  )
}

export default Meals
