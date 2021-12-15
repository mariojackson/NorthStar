import { Product } from '../../app/models/product';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

interface Props {
  product: Product;
}

export default function ProductCard({product}: Props) {
  return (
    <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl}/>
      </ListItemAvatar>
      <ListItemText>
        {product.name} - {product.price}
      </ListItemText>
    </ListItem>
  )
}