import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Link href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Typography variant='h6'>Teslo |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </Link>

        <Box sx={{ flex: 1 }} />

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          <Link href='/category/men'>
            <Button>Men</Button>
          </Link>
          <Link href='/category/women'>
            <Button>Women</Button>
          </Link>
          <Link href='/category/kid'>
            <Button>Kids</Button>
          </Link>
        </Box>

        <Box sx={{ flex: 1 }} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <Link href='/cart'>
          <IconButton>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Link>

        <Button sx={{ ml: 1 }}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}
