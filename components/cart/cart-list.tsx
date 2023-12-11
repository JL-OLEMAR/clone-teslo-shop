/* eslint-disable @typescript-eslint/indent */
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link'

import { useCart } from '@/hooks'
import { ItemCounter } from '../ui'

interface Props {
  canEditable?: boolean
}

export function CartList({ canEditable = false }: Props) {
  const { cart: productsCart } = useCart()
  console.log({ productsCart })

  const updatedQuantity = (value: number) => {
    // TODO: Llamar la acción del contexto para actualizar la cantidad
    console.log({ value })
  }

  return (
    <>
      {
        // productsCart.map(prod => (
        Object.entries(productsCart).map(([key, prod]) => (
          <Grid
            key={key}
            container
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Grid item xs={2} sm={3}>
              <Link href='/product/slug' style={{ textDecoration: 'none' }}>
                <CardMedia
                  component='img'
                  sx={{ borderRadius: '5px' }}
                  image={`/products/${prod.image}`}
                  alt={prod.title}
                />
              </Link>
            </Grid>

            <Grid item xs={8} sm={6}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1' sx={{ textWrap: 'balance' }}>{prod.title}</Typography>
                <Typography variant='body1'>Size: <strong>{prod.size}</strong></Typography>

                {
                  canEditable
                    ? (
                      <ItemCounter
                        currentValue={prod.quantity}
                        maxValue={5}
                        onUpdatedQuantity={updatedQuantity}
                      />
                    )
                    : <Typography variant='body1'>Quantity: <strong>{prod.quantity}</strong></Typography>
                }

              </Box>
            </Grid>

            <Grid item xs={2} sm={1}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography variant='subtitle1'>${prod.price}</Typography>
                {
                  canEditable && (<Button color='secondary' variant='text'>Remove</Button>)
                }
              </Box>
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
