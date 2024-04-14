import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bill:[
    {
      "id": 1,
      "products": [
        { "name": "Apples", "price": 2.99, "quantity": 3 },
        { "name": "Bananas", "price": 1.99, "quantity": 2 },
        { "name": "Milk", "price": 3.49, "quantity": 1 }
      ],
      "amount": 16.45
    },
    {
      "id": 2,
      "products": [
        { "name": "Bread", "price": 2.49, "quantity": 2 },
        { "name": "Eggs", "price": 1.79, "quantity": 1 },
        { "name": "Orange Juice", "price": 4.99, "quantity": 3 }
      ],
      "amount": 20.54
    },
    {
      "id": 3,
      "products": [
        { "name": "Pasta", "price": 1.29, "quantity": 4 },
        { "name": "Tomatoes", "price": 0.99, "quantity": 5 },
        { "name": "Onions", "price": 0.69, "quantity": 3 }
      ],
      "amount": 12.45
    },
    {
      "id": 4,
      "products": [
        { "name": "Chicken", "price": 6.99, "quantity": 1 },
        { "name": "Rice", "price": 2.79, "quantity": 2 },
        { "name": "Broccoli", "price": 1.49, "quantity": 3 }
      ],
      "amount": 15.55
    },
    {
      "id": 5,
      "products": [
        { "name": "Salmon", "price": 9.99, "quantity": 1 },
        { "name": "Potatoes", "price": 1.29, "quantity": 4 },
        { "name": "Spinach", "price": 1.99, "quantity": 2 }
      ],
      "amount": 20.53
    },
    {
      "id": 6,
      "products": [
        { "name": "Yogurt", "price": 2.49, "quantity": 3 },
        { "name": "Cereal", "price": 3.99, "quantity": 2 },
        { "name": "Cheese", "price": 4.29, "quantity": 1 }
      ],
      "amount": 22.52
    },
    {
      "id": 7,
      "products": [
        { "name": "Ground Beef", "price": 5.99, "quantity": 1 },
        { "name": "Lettuce", "price": 1.29, "quantity": 2 },
        { "name": "Bottled Water", "price": 0.99, "quantity": 3 }
      ],
      "amount": 12.54
    },
    {
      "id": 8,
      "products": [
        { "name": "Coffee", "price": 7.49, "quantity": 2 },
        { "name": "Tea", "price": 3.99, "quantity": 3 },
        { "name": "Biscuits", "price": 2.49, "quantity": 4 }
      ],
      "amount": 37.91
    }
  ]
  
}

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    addItem: (state, action) => {
        state.bill.push({
          id: action.payload.id,
          products: action.payload.products,
          amount: action.payload.amount
        });
    },
  },
});

export const { addItem } = billSlice.actions;
export default billSlice.reducer;
