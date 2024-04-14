import React, { useState } from 'react';
import { Card, CardContent, Badge } from '@mui/material';
import "../style/dashboard.css"
import { useSelector, useDispatch } from 'react-redux'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const customersList = useSelector(state => state.customer.customers);
  const getTotalAmont = useSelector((state) => state.totalAmount.amount);
  const navigate = useNavigate();
  const bills = useSelector(state => state);
  console.log(bills);

  const handleUserClick = (user) => {
    navigate("/preview",{ state: user } )
  }
  return (
    <div className="dashboard-container">
      <div className='d-flex jutify-content-center align-item-center'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className="row" style={{ width: "100%", paddingTop: "20px" }}>

            <div className='col'>
              <Card className='sub-card'>
                <div style={{ padding: "10px" }}>
                  <div style={{ padding: "5px" }}>
                    No Of Customers
                  </div>
                  <div style={{ padding: "5px", fontSize: "20px" }}>
                    {customersList?.length || 0}
                  </div>
                </div>
              </Card>
            </div>

            <div className='col'>
              <Card className='sub-card'>
                <div style={{ padding: "10px" }}>
                  <div style={{ padding: "5px" }}>
                    Total Sales Amount
                  </div>
                  <div style={{ padding: "5px", fontSize: "20px" }}>
                  ₹ {getTotalAmont.toFixed(2)}
                  </div>
                </div>
              </Card>
            </div>

          </div>
          <div className='row' style={{ marginTop: "20px", marginRight: "10px" }}>
            <div className='col'>
              <Card className='sub-card'>
                <div style={{ padding: "10px" }}>
                  <div style={{ padding: "5px" }}>
                    Customers List
                  </div>
                  <TableContainer className="tableContainer" style={{ maxHeight: '480px', overflow: 'auto' }}>
                    <Table stickyHeader aria-label="bill items table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>NAME</TableCell>
                          <TableCell>EMAIL</TableCell>
                          <TableCell>CONTACT</TableCell>
                          <TableCell>ADDRESS</TableCell>
                          <TableCell />
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customersList.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div style={{ width: "90px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{item.id} </div>
                            </TableCell>
                            <TableCell>
                              <div style={{ width: "90px", textOverflow: "ellipsis", overflow: "hidden", cursor: "pointer", color: "#6287ee" }} onClick={() => handleUserClick(item)}>{item.name}</div>
                            </TableCell>
                            <TableCell><div style={{ width: "90px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{item.email}</div></TableCell>
                            <TableCell><div style={{ width: "90px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{item.contact} </div></TableCell>
                            <TableCell><div style={{ width: "90px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{item.address} </div></TableCell>
                          </TableRow>
                        ))}

                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Card>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
