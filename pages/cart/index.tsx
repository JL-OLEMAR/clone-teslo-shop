import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'

import { CartList, OrderSummary } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'

export default function Cart() {
  return (
    <ShopLayout title='Cart' pageDescription='Store shopping cart'>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        {/* Order */}
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Order Summary</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />
              <Box display='flex' justifyContent='end' sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
