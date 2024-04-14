import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from '@mui/material';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Typography } from '@material-ui/core';

const ProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location?.state?.id;
  const billItems = useSelector(state =>  state.bill.bill);
  const getProductList =  billItems.find(item => item.id === userId);

  return (
 <Container>
        <Row className="align-items-center mb-3" style={{ marginTop: "20px"}}>
        <Col xs={1}>
          <ArrowBackOutlinedIcon size="sm" onClick={() => navigate(-1)} variant="light" />
        </Col>
        <Col>
          {/* <h1 style={{ textAlign: 'center' }}>Product List</h1> */}
        <Typography style={{ textAlign: 'center' }}variant="h5">Product List</Typography>
        </Col>
      </Row>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }}>
      <TableHead style={{ textAlign: 'center' }}>
        <TableRow>
        <TableCell align="center" style={{ width: '20px' }}>ID</TableCell>
        <TableCell align="center" style={{ width: '60px' }}>Product Name</TableCell>
          <TableCell align="center" style={{ width: '25px' }}>Price</TableCell>
          <TableCell align="center" style={{ width: '25px' }}>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getProductList?.products?.map((product, index) => (
          <TableRow key={product.id} style={{ textAlign: 'center' }}>
            <TableCell align="center" style={{ width: '20px' }}>{index +1}</TableCell>
            <TableCell align="center" style={{ width: '60' }}>{product.name}</TableCell>
            <TableCell align="center" style={{ width: '25px' }}>{product.quantity}</TableCell>
            <TableCell align="center" style={{ width: '25px' }}>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <div className="d-flex justify-content-end mt-2">
        <Card>
          <div style={{ padding: "10px"}}>Total Price(incl. Tax): ₹ {getProductList?.amount?.toFixed(2) || 0}</div>
        </Card>
      </div>
</Container> 
  );
};

export default ProductList;