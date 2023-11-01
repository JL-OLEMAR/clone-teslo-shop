/* eslint-disable @typescript-eslint/indent */
import type { GetServerSideProps } from 'next'
import { Box, Typography } from '@mui/material'

import { dbProducts } from '@/database'
import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import type { IProduct } from '@/interfaces'

interface Props {
  products: IProduct[]
  query: string
  foundProducts: boolean
}

export default function Search({ products, query, foundProducts }: Props) {
  return (
    <ShopLayout
      title='Teslo Shop - Search'
      pageDescription='Find the best products in the market with Teslo Shop'
    >
      <Typography variant='h1' component='h1'>Search product</Typography>
      {
        foundProducts
          ? (
            <Typography
              variant='h2'
              sx={{ mb: 1 }}
              textTransform='capitalize'
            >{products.length} products found for {query}
            </Typography>)
          : (
            <Box display='flex'>
              <Typography variant='h2' sx={{ mb: 1 }}>No products found for</Typography>
              <Typography
                variant='h2'
                sx={{ ml: 1 }}
                color='secondary'
                textTransform='capitalize'
              >{query}
              </Typography>
            </Box>
          )
      }

      <ProductList products={products} />
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string }

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await dbProducts.getProductsByTerm(query)
  const foundProducts = products.length > 0

  if (!foundProducts) {
    products = await dbProducts.getProducts()
  }

  return {
    props: {
      products,
      query,
      foundProducts
    }
  }
}
