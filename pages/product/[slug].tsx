// import { useRouter } from 'next/router'
import { type GetServerSideProps } from 'next'
import { Box, Button, Grid, Typography } from '@mui/material'

// import { initialData } from '@/database/products'
import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow, SizeSelector } from '@/components/products'
import { ItemCounter } from '@/components/ui'
// import { useProducts } from '@/hooks'
import { IProduct } from '@/interfaces'
import { dbProducts } from '@/database'

// const product = initialData.products[0]

interface Props {
  product: IProduct
}

export default function Slug({ product }: Props) {
  // const { query } = useRouter()
  // const url = `/products/${query.slug}`
  // const { products: product, isLoading } = useProducts({ url })

  // if (isLoading) return <h1>Loading</h1>
  // if (!product) return <h1>Not found</h1>

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
              <ItemCounter />

              {/* Sizes */}
              <SizeSelector sizes={product.sizes} />
            </Box>

            {/* Add to cart button */}
            <Button color='secondary' className='circular-btn'>
              Add to cart
            </Button>

            {/* <Chip label='No stock' color='error' variant='outlined' /> */}

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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
    props: { product }
  }
}
