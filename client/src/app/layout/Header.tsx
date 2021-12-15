import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position='static' sx={{ mb: 4 }} elevation={0}>
      <Toolbar>
        <Typography variant='h6'>
          NorthStar 
        </Typography>
      </Toolbar>
    </AppBar>
  )  
}