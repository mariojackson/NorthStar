import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Typography } from '@mui/material';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  
  function addProduct() {
    // TODO 
  }

  return (
    <>
      <Typography variant="h1">NorthStar</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
}

export default App;
