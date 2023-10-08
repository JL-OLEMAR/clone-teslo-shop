import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { initialData } from '@/database/products'
import { ShopLayout } from '@/components/layouts'
import { ItemCounter } from '@/components/ui'
import { ProductSlideshow, SizeSelector } from '@/components/products'

const product = initialData.products[0]

export default function Slug() {
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
