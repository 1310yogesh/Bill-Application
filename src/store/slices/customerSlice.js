import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [
    {
    "id": 1,
    "name": "yogesh s",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 2,
    "name": "yogesh",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 3,
    "name": "siva",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 4,
    "name": "ragu",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 5,
    "name": "jacob",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 6,
    "name": "vengatesh",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 7,
    "name": "jagadish",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
  {
    "id": 8,
    "name": "kalai",
    "email": "yochan234@gmail.com",
    "contact": "98765678",
    "address": "ffff"
  },
],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    updateCustomerData: (state, action) => {
      const { id, name, email, contact, address } = action.payload;
      state.customers.push({
        id,
        name,
        email,
        contact,
        address,
      });

    },
  },
});

export const { updateCustomerData } = customerSlice.actions;
export default customerSlice.reducer;
