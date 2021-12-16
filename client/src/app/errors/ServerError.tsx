import { useHistory, useLocation } from 'react-router-dom';
import { Button, Container, Divider, Paper, Typography } from '@mui/material';

export default function ServerError() {
  const history = useHistory(); 
  const { state } = useLocation<any>();
  
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant='h5' gutterBottom sx={{ pt: 2, fontWeight: 'bold' }}>
            {state.error.title}  
          </Typography>
          
          <Divider />
          
          <Typography sx={{ py: 2 }}>
            {state.error.detail || 'Internal server error' }
          </Typography>
        </> 
      ) : (
        <Typography variant='h5' gutterBottom>
          Server error
        </Typography>
      )} 
      
      <Button onClick={() => history.push('/catalog')} sx={{ my: 2 }}>
        &larr;  Back to the store
      </Button>
    </Container>
  )
}