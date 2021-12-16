import { Product } from '../../app/models/product';
import {
  Avatar,
  Button, Card,
  CardActions,
  CardContent, CardHeader,
  CardMedia,
  Typography
} from '@mui/material';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
        
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', marginTop: '24px' }}
        image={product.pictureUrl}
        title={product.name}
      />
      
      <CardContent>
        <Typography gutterBottom color='text.primary' variant='body2' fontWeight='bold'>
          {product.name}
        </Typography>
          
        <Typography gutterBottom color='secondary' variant='body2'>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
        
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}