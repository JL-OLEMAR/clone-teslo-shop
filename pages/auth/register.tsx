import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import Link from 'next/link'

import { AuthLayout } from '@/components/layouts'

export default function Register() {
  return (
    <AuthLayout title='Register'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Sign up</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Name' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Email' type='email' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Password' type='password' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Register
            </Button>
          </Grid>

          <Grid item xs={12} display='flex' justifyContent='end'>
            <Link href='/auth/login' className='custom-link'>
              <Typography variant='body1'>
                Already have an account?
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
