import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';

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

export default function Header({ darkMode, handleDarkModeSwitch }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 12, color: 'white' }} elevation={0}>
      <Toolbar>
        <Typography 
          variant='h6' 
          style={{ flex: 1 }} 
          component={NavLink} to='/' 
          sx={{ textDecoration: 'none', color: 'white' }}>
          NorthStar
        </Typography>

        <List sx={{ display: 'flex' }}>
          {centeredLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color: 'inherit', typography: 'p'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        
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
              sx={{color: 'inherit', typography: 'p'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        
        <DarkModeSwitch checked={darkMode} onChange={handleDarkModeSwitch} />

      </Toolbar>
    </AppBar>
  )  
}