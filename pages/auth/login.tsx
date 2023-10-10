import Link from 'next/link'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { AuthLayout } from '@/components/layouts'

export default function Login() {
  return (
    <AuthLayout title='Log in'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Sign in</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Email' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Password' type='password' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={12} display='flex' justifyContent='end'>
            <Link href='/auth/register' className='custom-link'>
              <Typography variant='body1'>
                Do not have an account?
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
