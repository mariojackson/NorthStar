import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Typography variant='h6'>
          NorthStar 
        </Typography>
      </Toolbar>
    </AppBar>
  )  
}