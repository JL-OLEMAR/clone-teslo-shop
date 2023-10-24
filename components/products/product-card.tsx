import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import { IProduct } from '@/interfaces'

interface Props {
  product: IProduct
}

export function ProductCard({ product }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <Link href='/product/slug' prefetch={false}>
          <CardActionArea>
            <CardMedia
              sx={{ aspectRatio: '1/1', objectPosition: 'center' }}
              image={productImage}
              alt={`${product.title} image`}
              onLoad={() => setIsImageLoaded(true)}
              component='img'
              className='fadeIn'
              loading='lazy'
            />
          </CardActionArea>
        </Link>
      </Card>

      <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}
