import { Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Loading } from '@/components/ui'
import { useProducts } from '@/hooks'

const url = '/products'

export default function Home() {
  const { products, isLoading } = useProducts({ url })

  return (
    <ShopLayout
      title='Teslo Shop - Home'
      pageDescription='Find the best products in the market with Teslo Shop'
    >
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>

      {
        isLoading
          ? <Loading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}
