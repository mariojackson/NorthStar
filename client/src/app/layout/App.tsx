import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';

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
    <div>
      <h1>NorthStar</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
