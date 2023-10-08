import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { ShopLayout } from '@/components/layouts'
import { CartList } from '@/components/cart'

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

              {/* <OrderSummary /> */}
              <Box display='flex' justifyContent='end' sx={{ mt: 3 }}>
                <Button sx={{ width: '100%' }} className='circular-btn' color='secondary'>
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
