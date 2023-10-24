import { Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Loading } from '@/components/ui'
import { useProducts } from '@/hooks'

const url = '/products?gender=women'

export default function Women() {
  const { products, isLoading } = useProducts({ url })

  return (
    <ShopLayout
      title='Teslo Shop - Women'
      pageDescription='Find the best products in the market with Teslo Shop for women'
    >
      <Typography variant='h1' component='h1'>Women</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Products for Ladies</Typography>

      {
        isLoading
          ? <Loading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}
