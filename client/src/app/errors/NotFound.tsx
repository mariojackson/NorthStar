import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container component={Paper} sx={{height: 400, textAlign: 'center' }}>
      <Typography variant='h5' gutterBottom sx={{ pt: 2, fontWeight: 'bold', paddingTop: 12 }}>
        Oops - we could not find what you are looking for.
      </Typography>
      
      <Button fullWidth component={Link} to='/catalog'>
        &larr;  Back to the store
      </Button>
    </Container>
  )
}