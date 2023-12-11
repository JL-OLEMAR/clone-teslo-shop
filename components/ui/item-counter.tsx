import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

interface Props {
  currentValue: number
  maxValue: number
  onUpdatedQuantity: (quantity: number) => void
}

export function ItemCounter({ currentValue, maxValue, onUpdatedQuantity }: Props) {
  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return
      return onUpdatedQuantity(currentValue - 1)
    }

    if (currentValue >= maxValue) return

    onUpdatedQuantity(currentValue + 1)
  }

  return (
    <Box display='flex' alignItems='center'>
      <IconButton
        onClick={() => addOrRemove(-1)}
        sx={{ pl: 0 }}
      >
        <RemoveCircleOutline />
      </IconButton>

      <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>

      <IconButton
        onClick={() => addOrRemove(1)}
        disabled={currentValue >= maxValue}
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
