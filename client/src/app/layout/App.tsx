import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { grey, indigo, lightGreen, pink } from '@mui/material/colors';

import Header from './Header';
import Catalog from '../../features/catalog/Catalog';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/contact/AboutPage';
import ContactPage from '../../features/about/contact/ContactPage';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? grey[50] : '#333',
      },
      text: {
        primary: paletteType === 'light' ? grey[800] : grey[300]
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
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/catalog' component={Catalog} exact={true} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
