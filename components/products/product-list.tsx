import { Grid } from '@mui/material'

import { ProductCard } from './product-card'
import type { IProduct } from '@/interfaces'

interface Props {
  products: IProduct[]
}

export function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {
        products.map((prod) => (
          <ProductCard key={prod.slug} product={prod} />
        ))
      }
    </Grid>
  )
}
