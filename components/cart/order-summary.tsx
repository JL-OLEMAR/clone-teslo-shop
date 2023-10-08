import { Grid, Typography } from '@mui/material'

export function OrderSummary() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>N° products:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3</Typography>
      </Grid>

      <Grid item xs={6} sm={8}>
        <Typography>Sales Tax (15%):</Typography>
      </Grid>
      <Grid item xs={6} sm={4} display='flex' justifyContent='end'>
        <Typography>{`$${35.46}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${350.46}`}</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{`$${1035.46}`}</Typography>
      </Grid>
    </Grid>
  )
}
