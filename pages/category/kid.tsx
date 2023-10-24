import { Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Loading } from '@/components/ui'
import { useProducts } from '@/hooks'

const url = '/products?gender=kid'

export default function Kid() {
  const { products, isLoading } = useProducts({ url })

  return (
    <ShopLayout
      title='Teslo Shop - Kids'
      pageDescription='Find the best products in the market with Teslo Shop for kids'
    >
      <Typography variant='h1' component='h1'>Kids</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Products for Kids</Typography>

      {
        isLoading
          ? <Loading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}
