import { useRouter } from 'next/navigation'
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined
} from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material'
import { useUiContext } from '@/hooks/useUiContext'

export const SideMenu = () => {
  const router = useRouter()
  const { isToggleMenu, toggleSideMenu } = useUiContext()

  const navigateTo = (url: string) => {
    router.push(url)
    toggleSideMenu()
  }

  return (
    <Drawer
      open={isToggleMenu}
      anchor='right'
      onClose={toggleSideMenu}
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Input
                type='text'
                placeholder="Men's Quilted Shirt"
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                    >
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ConfirmationNumberOutlined />
              </ListItemIcon>
              <ListItemText primary='My orders' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo('/category/men')}
              sx={{ display: { xs: '', sm: 'none' } }}
            >
              <ListItemIcon>
                <MaleOutlined />
              </ListItemIcon>
              <ListItemText primary='Men' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo('/category/women')}
              sx={{ display: { xs: '', sm: 'none' } }}
            >
              <ListItemIcon>
                <FemaleOutlined />
              </ListItemIcon>
              <ListItemText primary='Women' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo('/category/kid')}
              sx={{ display: { xs: '', sm: 'none' } }}
            >
              <ListItemIcon>
                <EscalatorWarningOutlined />
              </ListItemIcon>
              <ListItemText primary='Kids' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VpnKeyOutlined />
              </ListItemIcon>
              <ListItemText primary='Log in' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginOutlined />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryOutlined />
              </ListItemIcon>
              <ListItemText primary='Products' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ConfirmationNumberOutlined />
              </ListItemIcon>
              <ListItemText primary='Orders' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary='users' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
