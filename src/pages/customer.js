import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Card, Button } from '@mui/material';
import '../style/customer.css';
import { customerSchema } from "../validation/validation";
import { useSelector, useDispatch } from 'react-redux';
import { updateCustomerData } from '../store/slices/customerSlice';
import { useNavigate } from 'react-router-dom'

const Customer = () => {
    const customerData = useSelector((state) => state.customer.customers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div className="customer-container" style={{ marginTop: "20px"}}>
      <Formik
        initialValues={{id: 0, name: '', email: '', contact: '', address: '' }}
        validationSchema={customerSchema}
        onChange={true}
        enableReinitialize
        onSubmit={(values) => {
            dispatch(updateCustomerData({...values, id: Number(customerData[customerData.length - 1]?.id) + 1}));
            navigate('/bill', {state:{...values, id: Number(customerData[customerData.length - 1]?.id) + 1}}); 
        }}
      >
        {({ isSubmitting, errors, values, setFieldValue }) => (
        
          <Form className="customer-form">
            <Card className="customer-card" variant='outlined'>
            <div className="register-text">Register</div>
              <Field
                component={TextField}
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                autoFocus
                size="small"
                onChange={e=> setFieldValue("name",e.target.value)}
              />
              <ErrorMessage name="name" component="div" className="error" />

              <Field
                component={TextField}
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                size="small"
                onChange={e=> setFieldValue("email",e.target.value)}
              />
              <ErrorMessage name="email" component="div" className="error" />

              <Field
                component={TextField}
                label="Contact"
                name="contact"
                fullWidth
                margin="normal"
                size="small"
                onChange={e=> setFieldValue("contact",e.target.value)}
              />
              <ErrorMessage name="contact" component="div" className="error" />

              <Field
                component={TextField}
                label="Address"
                name="address"
                multiline
                fullWidth
                rows={4}
                margin="normal"
                size="small"
                onChange={e=> setFieldValue("address",e.target.value)}
              />
              <ErrorMessage name="address" component="div" className="error" />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit-button"
                // disabled={isSubmitting}
              >
                Add
              </Button>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Customer;
