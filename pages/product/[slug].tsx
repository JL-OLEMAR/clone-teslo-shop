/* eslint-disable @typescript-eslint/indent */
import { useState } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Button, Chip, Grid, Typography } from '@mui/material'

import { dbProducts } from '@/database'
import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow, SizeSelector } from '@/components/products'
import { ItemCounter } from '@/components/ui'
import type { ICartProduct, IProduct, ISize } from '@/interfaces'

interface Props {
  product: IProduct
}

export default function Slug({ product }: Props) {
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
    size: undefined
  })

  const updatedQuantity = (quantity: number) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      quantity
    }))
  }

  const selectedSize = (size: ISize) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      size
    }))
  }

  const onAddProduct = () => {
    console.log({ tempCartProduct })
  }

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>

      <Grid container spacing={3}>
        {/* Slide image */}
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>

            {/* Title */}
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>

            {/* Amount */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Amount</Typography>

              {/* Counter */}
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                maxValue={Math.min(product.inStock, 5)}
                onUpdatedQuantity={updatedQuantity}
              />

              {/* Sizes */}
              <SizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={selectedSize}
              />
            </Box>

            {/* Add to cart button */}
            {
              (product.inStock > 0)
                ? (
                  <Button
                    onClick={onAddProduct}
                    color='secondary'
                    className='circular-btn'
                  >
                    {tempCartProduct.size ? 'Add to cart' : 'Select size'}
                  </Button>
                )
                : (
                  <Chip label='No stock' color='error' variant='outlined' />
                )
            }

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description:</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await dbProducts.getAllProductsSlugs()

  return {
    paths: slugs.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string }
  const product = await dbProducts.getProductBySlug({ slug })

  if (product == null) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
