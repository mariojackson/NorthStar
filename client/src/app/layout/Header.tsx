import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';

import DarkModeSwitch from '../../features/DarkModeSwitch';

interface Props {
  darkMode: boolean;
  handleDarkModeSwitch: () => void;
}

const centeredLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
];

const rightAlignedLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' }
];

const navLinkStyle = {
  color: 'primary.dark',
  textDecoration: 'none',
  typography: 'p',
  '&:hover': {
    color: 'white'
  },
  '&.active': {
    color: 'white'
  }
}

export default function Header({ darkMode, handleDarkModeSwitch }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 12, color: 'white' }} elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Box>
          <Typography
            variant='h6'
            component={NavLink} to='/'
            exact={true}
            sx={{ textDecoration: 'none', color: 'white' }}>
            NorthStar
          </Typography>
        </Box>

        <List sx={{ display: 'flex' }}>
          {centeredLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navLinkStyle}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        
        <Box display='flex' alignItems='center'>
          <DarkModeSwitch checked={darkMode} onChange={handleDarkModeSwitch} />
          
          <IconButton size='large'>
            <Badge badgeContent={4} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: 'flex' }}>
            {rightAlignedLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navLinkStyle}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

      </Toolbar>
    </AppBar>
  )  
}