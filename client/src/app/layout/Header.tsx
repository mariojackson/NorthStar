import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import DarkModeSwitch from '../../features/DarkModeSwitch';

interface Props {
  darkMode: boolean;
  handleDarkModeSwitch: () => void;
}

export default function Header({ darkMode, handleDarkModeSwitch }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 12 }} elevation={0}>
      <Toolbar>
        <Typography variant='h6' style={{ flex: 1 }}>
          NorthStar
        </Typography>

        <DarkModeSwitch checked={darkMode} onChange={handleDarkModeSwitch} />
      </Toolbar>
    </AppBar>
  )  
}