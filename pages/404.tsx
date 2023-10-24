import { Box, Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'

export default function Custom404() {
  return (
    <ShopLayout title='Page not found' pageDescription="There's nothing to show here">
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 | </Typography>
        <Typography marginLeft={2}>Page not found.</Typography>
      </Box>
    </ShopLayout>
  )
}
