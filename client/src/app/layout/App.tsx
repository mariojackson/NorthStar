import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { Box, Container, CssBaseline } from '@mui/material';
import { grey } from '@mui/material/colors';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  
  function addProduct() {
    // TODO 
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ backgroundColor: grey[50] }}>
        <Container>
          <Catalog products={products} addProduct={addProduct} />
          </Container>
      </Box>
    </>
  );
}

export default App;
