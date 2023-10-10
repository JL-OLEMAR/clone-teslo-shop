import { Box, Typography } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { ShopLayout } from '@/components/layouts'
import Link from 'next/link'

export default function Empty() {
  return (
    <ShopLayout title='Empty cart' pageDescription='No items in cart yet. Start shopping now!'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography>Your cart is empty!</Typography>
          <Link href='/' className='custom-link'>
            <Typography
              component='span'
              fontSize={24}
              fontWeight={500}
              color='secondary'
            >Go shopping
            </Typography>
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  )
}
