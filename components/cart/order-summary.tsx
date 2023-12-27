import { Grid, Typography } from '@mui/material'
import { useCart } from '@/hooks'
import { currency } from '@/utils'

const taxRate = +(process.env.NEXT_PUBLIC_TAX_RATE ?? 0)

export function OrderSummary() {
  const { numberOfItems, tax, subTotal, total } = useCart()

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>N° products:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{numberOfItems} {numberOfItems > 1 ? 'products' : 'product'}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{currency(subTotal)}</Typography>
      </Grid>

      {taxRate && (
        <>
          <Grid item xs={6} sm={8}>
            <Typography>Sales Tax ({taxRate * 100}%):</Typography>
          </Grid>
          <Grid item xs={6} sm={4} display='flex' justifyContent='end'>
            <Typography>{currency(tax)}</Typography>
          </Grid>
        </>
      )}

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{currency(total)}</Typography>
      </Grid>
    </Grid>
  )
}
