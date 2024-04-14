import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { ErrorOutline as ErrorIcon } from '@mui/icons-material'; 
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const timeoutId = setTimeout(() => navigate('/'), 3000); 
    
        return () => clearTimeout(timeoutId); 
      }, []);
  return (
    <Container fluid className="d-flex justify-content-center" style={{ marginTop: "20px"}}>
        <div className='col-6'>
          <Card>
            <CardBody>
              <CardTitle className="text-center">
                <ErrorIcon fontSize="large" color="error" /> Page Not Found
              </CardTitle>
              <CardText className='d-flex justify-content-center'>
                The page you requested could not be found. It may be unavailable or have a different URL.
              </CardText>
              <CardText className='d-flex justify-content-center'>
                <a href="/">Go back to Home Page</a>
              </CardText>
            </CardBody>
          </Card>
        </div>

    </Container>
  );
};

export default NotFound;
