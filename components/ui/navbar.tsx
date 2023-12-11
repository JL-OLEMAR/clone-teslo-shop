/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/indent */
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Toolbar, Typography } from '@mui/material'
import { ClearOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useUi } from '@/hooks'

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const router = useRouter()
  const { toggleSideMenu } = useUi()

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return
    router.push(`/search/${searchTerm}`)
  }

  return (
    <AppBar>
      <Toolbar>
        <Link href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Typography variant='h6'>Teslo |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </Link>

        <Box sx={{ flex: 1 }} />

        <Box
          sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'flex' }, gap: 1 }}
          className='fadeIn'
        >
          <Link href='/category/men'>
            <Button color={router.asPath === '/category/men' ? 'primary' : 'info'}>Men</Button>
          </Link>
          <Link href='/category/women'>
            <Button color={router.asPath === '/category/women' ? 'primary' : 'info'}>Women</Button>
          </Link>
          <Link href='/category/kid'>
            <Button color={router.asPath === '/category/kid' ? 'primary' : 'info'}>Kids</Button>
          </Link>
        </Box>

        <Box sx={{ flex: 1 }} />

        {
          isSearchVisible
            ? (
              <Input
                className='fadeIn'
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                type='search'
                placeholder='Search...'
                autoFocus
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setIsSearchVisible(false)}>
                      <ClearOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            )
            : (
              <IconButton
                onClick={() => setIsSearchVisible(true)}
                className='fadeIn'
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                <SearchOutlined />
              </IconButton>
            )
        }
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={toggleSideMenu}
        >
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
