import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { CheckCircleOutline as CheckIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
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
                <CheckIcon fontSize="large" color="success" /> Thank You for Your Purchase!
              </CardTitle>
              <CardText className='d-flex justify-content-center'>
              Welcome back for another visit!
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

export default ThankYou;