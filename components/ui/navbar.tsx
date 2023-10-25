import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { useUiContext } from '@/hooks'

export function Navbar() {
  const { asPath } = useRouter()
  const { toggleSideMenu } = useUiContext()

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
            <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Men</Button>
          </Link>
          <Link href='/category/women'>
            <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Women</Button>
          </Link>
          <Link href='/category/kid'>
            <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Kids</Button>
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

        <IconButton
          onClick={toggleSideMenu}
          sx={{ ml: 0.5 }}
          size='large'
          edge='start'
          aria-label='menu'
        >
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
