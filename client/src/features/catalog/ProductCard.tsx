import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card,
  CardActions,
  CardContent, CardHeader, CardMedia,
  Typography
} from '@mui/material';
import { grey} from '@mui/material/colors';

import { Product } from '../../app/models/product';
import agent from '../../app/api/agent';
import { LoadingButton } from '@mui/lab';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [loading, setLoading] = useState(false);
  
  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }
  
  return (
    <Card>
        
      <CardHeader 
        sx={{ backgroundColor: 'primary.main', color: 'white' }}
        titleTypographyProps={{ variant: 'body2' }}
        title={product.name} />
      
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain', backgroundColor: grey[200] }}
        image={product.pictureUrl}
        title={product.name}
      />
      
      <CardContent>
        <Typography gutterBottom variant='body2' fontWeight='bold'>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
        
      <CardActions>
        <LoadingButton 
          loading={loading} 
          onClick={() => handleAddItem(product.id)} 
          size="small"
        >
          Add to cart
        </LoadingButton>
        
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}