import * as Yup from 'yup';


const customerSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    contact: Yup.string().min(7).max(10).required('Contact number is required'),
    address: Yup.string().required('Address is required'),
  });

export {customerSchema};