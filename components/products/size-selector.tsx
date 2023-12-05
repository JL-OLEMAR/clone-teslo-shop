import { Box, Button } from '@mui/material'

import { type ISize } from '@/interfaces'

interface Props {
  sizes: ISize[]
  selectedSize?: ISize
  onSelectedSize: (size: ISize) => void
}

export function SizeSelector({ sizes, selectedSize, onSelectedSize }: Props) {
  return (
    <Box>
      {
        sizes.map((size) => (
          <Button
            key={size}
            onClick={() => onSelectedSize(size)}
            size='small'
            color={selectedSize === size ? 'primary' : 'info'}
          >
            {size}
          </Button>
        ))
      }
    </Box>
  )
}
