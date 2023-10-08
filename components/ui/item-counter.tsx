import { Box, IconButton, Typography } from '@mui/material'
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material'

export function ItemCounter() {
  return (
    <Box display='flex' alignItems='center'>
      <IconButton sx={{ pl: 0 }}>
        <RemoveCircleOutline />
      </IconButton>

      <Typography sx={{ width: 40, textAlign: 'center' }}>1</Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
