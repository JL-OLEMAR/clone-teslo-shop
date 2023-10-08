import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { ShopLayout } from '@/components/layouts'

export default function Address() {
  return (
    <ShopLayout title='Address' pageDescription='Confirm destination address for this order'>
      <Typography variant='h1' component='h1'>Address</Typography>

      <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>
        <Grid item xs={12} sm={6}>
          <TextField label='Name' variant='outlined' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Last Name' variant='outlined' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Address' variant='outlined' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Address 2 (Optional)' variant='outlined' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Postal code' variant='outlined' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='City' variant='outlined' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor='selectCountry'>Country</InputLabel>
            <Select
              id='selectCountry'
              label='Country'
              variant='outlined'
              value={1}
            >
              <MenuItem value={1}>Perú</MenuItem>
              <MenuItem value={2}>Colombia</MenuItem>
              <MenuItem value={3}>Ecuador</MenuItem>
              <MenuItem value={4}>Argentina</MenuItem>
              <MenuItem value={5}>Chile</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Phone number' variant='outlined' fullWidth />
        </Grid>
      </Grid>

      <Box display='flex' justifyContent='center'>
        <Button color='secondary' className='circular-btn' size='large'>Check order</Button>
      </Box>
    </ShopLayout>
  )
}
