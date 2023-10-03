import { Typography } from '@mui/material'
import { ShopLayout } from '@/components/layouts'

export default function Home() {
  return (
    <ShopLayout
      title='Teslo Shop - Home'
      pageDescription='Find the best products in the market with Teslo Shop'
    >
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>
    </ShopLayout>
  )
}
