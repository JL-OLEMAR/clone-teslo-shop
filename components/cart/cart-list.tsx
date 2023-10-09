import Link from 'next/link'
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'

import { initialData } from '@/database/products'
import { ItemCounter } from '../ui'

const productsCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

interface Props {
  canEditable?: boolean
}

export function CartList({ canEditable = false }: Props) {
  return (
    <>
      {
        productsCart.map(prod => (
          <Grid
            key={prod.slug}
            container
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Grid item xs={2} sm={3}>
              {/* FIXME: Lead to product page */}
              <Link href='/product/slug' style={{ textDecoration: 'none' }}>
                <CardMedia
                  component='img'
                  sx={{ borderRadius: '5px' }}
                  image={`/products/${prod.images[0]}`}
                  alt={prod.title}
                />
              </Link>
            </Grid>

            <Grid item xs={8} sm={6}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1' sx={{ textWrap: 'balance' }}>{prod.title}</Typography>
                <Typography variant='body1'>Size: <strong>M</strong></Typography>

                {
                  canEditable
                    ? <ItemCounter />
                    : <Typography variant='body1'>Quantity: <strong>3</strong></Typography>
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
