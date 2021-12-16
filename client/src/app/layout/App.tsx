import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { grey, indigo} from '@mui/material/colors';

import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? grey[50]: '#333',
      },
      primary: {
        main: indigo[400],
      },
      secondary: {
        main: '#3d5afe',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20
          }
        }
      }
    }
  });
  
  function handleDarkModeSwitch() {
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Header darkMode={darkMode} handleDarkModeSwitch={handleDarkModeSwitch} />
      
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
