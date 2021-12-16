import { Product } from '../../app/models/product';
import {
  Button, Card,
  CardActions,
  CardContent, CardHeader, CardMedia,
  Typography
} from '@mui/material';
import { grey} from '@mui/material/colors';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
        
      <CardHeader 
        sx={{ backgroundColor: 'primary.main', color: 'white' }}
        titleTypographyProps={{ variant: 'body2', fontWeight: 'bold' }}
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
        <Button size="small">Add to cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}