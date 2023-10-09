import Link from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { CartList, OrderSummary } from '@/components/cart'

export default function Summary() {
  return (
    <ShopLayout title='Summary of your purchase' pageDescription='Summary of your purchase in Teslo Shop NextJS App'>
      <Typography variant='h1' component='h1'>Order Summary</Typography>

      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        {/* Order */}
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Summary (3 products)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Shipping Address</Typography>
                <Link href='/checkout/address'>Edit</Link>
              </Box>
              <Typography>John Doe</Typography>
              <Typography>Street 123</Typography>
              <Typography>University of Colombia, HYA 23S</Typography>
              <Typography>Colombia</Typography>
              <Typography>mobile: +57 311 123 456</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Order Info</Typography>
                <Link href='/cart'>Edit</Link>
              </Box>

              <OrderSummary />
              <Box display='flex' justifyContent='end' sx={{ mt: 3 }}>
                <Button fullWidth color='secondary' className='circular-btn'>
                  Confirm Order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
