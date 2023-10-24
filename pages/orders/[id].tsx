import { CreditScoreOutlined } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'

import { CartList, OrderSummary } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'

export default function Order() {
  return (
    <ShopLayout title='Summary of your order abc123' pageDescription='Summary of your order'>
      <Typography variant='h1' component='h1'>Order: abc123</Typography>

      {/* <Chip
        sx={{ my: 2, px: 2 }}
        label='Order not paid'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      /> */}

      <Chip
        sx={{ my: 2, px: 2 }}
        label='Order paid'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />

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
                <Link href='/checkout/address' className='custom-link'>Edit</Link>
              </Box>
              <Typography>John Doe</Typography>
              <Typography>Street 123</Typography>
              <Typography>University of Colombia, HYA 23S</Typography>
              <Typography>Colombia</Typography>
              <Typography>mobile: +57 311 123 456</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Order Info</Typography>
                <Link href='/cart' className='custom-link'>Edit</Link>
              </Box>

              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                {/* TODO:  */}
                <h2>Pay</h2>
                <Chip
                  sx={{ my: 2, px: 2 }}
                  label='Order paid'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
