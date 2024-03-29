import { useParams } from 'react-router-dom';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Product } from '../../app/models/product';
import agent from '../../app/api/agent';
import NotFound from '../../app/errors/NotFound';
import LoadingComponent from '../../app/layout/LoadingComponent';

export default function ProductDetails() {
  const { id }  = useParams<{id: string}>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    agent.Catalog.details(parseInt(id))
      .then(product => setProduct(product))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);
  
  if (loading) {
    return <LoadingComponent message='Loading product information...' />
  }
  
  if (!product) {
    return <NotFound />
  }
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
      </Grid> 
      
      <Grid item xs={6}>
        <Typography variant='h3' sx={{ mb: 6 }}>
          {product.name}
        </Typography>
        
        <Typography variant='h6' sx={{ mb: 4, fontWeight: 'normal' }}>
          {product.description}
        </Typography>
        
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ color: 'text.secondary' }}>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell sx={{ color: 'text.secondary' }}>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell sx={{ color: 'text.secondary' }}>Quantity</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell sx={{ color: 'text.secondary' }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>${(product.price / 100).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}
