import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    IconButton,
    Select,
    MenuItem,
    TableContainer,
} from '@material-ui/core'; 
import { DeleteOutlined } from '@material-ui/icons'; 
import { Grid } from '@material-ui/core'; 
import { useNavigate } from 'react-router-dom'; 
// import {ControlPointOutlinedIcon} from '@mui/icons-material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "../style/bill.css"
import { addItem } from '../store/slices/billSlice';
import { updateTotalAmount } from "../store/slices/totalAmountSlice";
import snackBarMessage from "../common/snackBar";
import { useLocation } from 'react-router-dom';

const Bill = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const getTotalAmont = useSelector((state) => state.totalAmount.amount);
    const customers = useSelector((state) => state.customer.customers);
    const [billItems, setBillItems] = useState([]); // State for bill items
    const [newProductName, setNewProductName] = useState(''); // State for new product name
    const [newProductPrice, setNewProductPrice] = useState(0); // State for new product price
    const [selectedCustomer, setselectedCustomer] = useState(customers[customers.length - 1]?.id || null);
    const [selectedCustomerId, setselectedCustomerid] = useState(customers[customers.length - 1]?.id || null);
    const [gstRate, setGstRate] = useState(0); // State for GST tax rate
    const navigate = useNavigate(); // useNavigate hook for navigation

    useEffect(() => {
        // Reset bill items when customer changes or on component mount
        if (!selectedCustomer) return;
        setBillItems([]); // Clear bill items for new customer
    }, [selectedCustomer]);

    const handleSelectCustomer = (event) => {
        setselectedCustomer(event.target.value);
    };

    const handleItemChange = (event, index) => {
        const updatedBillItems = [...billItems];
        updatedBillItems[index].quantity = event.target.value;
        setBillItems(updatedBillItems);
    };

    const handleAddItem = () => {
        if (!newProductName || !newProductPrice) return;
        setBillItems([...billItems, { name: newProductName, price: newProductPrice, quantity: 1 }]);
        setNewProductName('');
        setNewProductPrice(0);
    };

    const handleDeleteItem = (index) => {
        const updatedBillItems = [...billItems];
        updatedBillItems.splice(index, 1);
        setBillItems(updatedBillItems);
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        billItems.forEach(item => subtotal += item.price * item.quantity);
        return subtotal;
    };

    const calculateGst = () => {
        return (calculateSubtotal() * gstRate) / 100;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateGst();
    };

    const handleNavigateToBill = () => {
        // snackBarMessage("test", true)
        dispatch(addItem({ id: location?.state?.id, products: billItems, amount: calculateTotal() }));
        dispatch(updateTotalAmount(getTotalAmont + (calculateTotal() || 0)))
        if (billItems.length) {
            navigate(`/thank-you`);
        }
    };

    return (
        <div className='d-flex justify-content-center align-item-center' style={{ marginTop: "20px" }}>
            {/* <h2 className="row"style={{ display: "flex", justifyContent: "center", marginTop: "5px", alignItems: "center"}}>Preview</h2> */}
            <Card>
                <CardContent>
                    {/* <Typography variant="h5">Select Customer:</Typography>
                    <Select
                        value={selectedCustomer || ''} // Set initial value based on selected customer
                        onChange={(e) => handleSelectCustomer(e)}
                    >
                        {customers.map((customer) => (
                            <MenuItem key={customer.id} value={customer.id} id={customer.id}>
                                {customer.name}
                            </MenuItem>
                        ))}
                    </Select> */}
                    <>
                        <div>
                            <Typography variant="h6" >
                                Customer Details
                            </Typography>
                            <div className='row' style={{ fontSize: "15px", display: "flex", justifyContent: "space-around", marginTop: "8px" }}>
                                <div className='col-4'>
                                    <div>
                                        Name: {location?.state?.name || ""}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div>
                                        Contact: {location?.state?.contact || ""}
                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ fontSize: "15px", display: "flex", justifyContent: "space-around", marginTop: "8px" }}>
                                <div className='col-4'>
                                    <div>
                                        Email: {location?.state?.email || ""}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div>
                                        Date: {new Date().toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <Typography variant="h6" style={{ marginTop: 20 }}>
                            Product Details
                        </Typography>

                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    label="Product Name"
                                    variant="standard"
                                    value={newProductName}
                                    onChange={(e) => setNewProductName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Price"
                                    type="number"
                                    variant="standard"
                                    value={newProductPrice}
                                    onChange={(e) => setNewProductPrice(e.target.value)}
                                    InputProps={{ inputProps: { min: 0 } }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="GST Rate (%)"
                                    type="number"
                                    variant="standard"
                                    value={gstRate}
                                    onChange={(e) => setGstRate(e.target.value)}
                                    InputProps={{ inputProps: { min: 0 } }}
                                />
                            </Grid>
                            <Grid item xs={2} className='d-flex align-item-center justify-content-center' >
                                <ControlPointIcon onClick={handleAddItem} sx={{ color: "#6287ee" }} style={{ marginTop: "15px" }} />
                            </Grid>
                        </Grid>
                        <TableContainer className="tableContainer" style={{ minHeight: "120px", maxHeight: '300px', overflow: 'auto', marginTop: "20px" }}>
                            <Table stickyHeader aria-label="bill items table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">GST</TableCell>
                                        <TableCell />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {billItems.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={6}>
                                                <div className='d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
                                                    No Data
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                    {billItems.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>
                                                <TextField
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => handleItemChange(e, index)}
                                                    variant="standard"
                                                    inputProps={{ min: 1 }} 
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                {(item.price * item.quantity).toFixed(2)}
                                            </TableCell>
                                            <TableCell align="right">
                                                {((item.price * item.quantity) * gstRate) / 100} ({gstRate}%)
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleDeleteItem(index)}>
                                                    <DeleteOutlined />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>

                        <div className='row'>
                            <Typography variant="h7" style={{ marginTop: 20 }}>
                                SubTotal : ₹ {calculateSubtotal().toFixed(2)}
                            </Typography>
                        </div>

                        <div className='row'>
                            <Typography variant="h7">
                                GST : ₹ {calculateGst().toFixed(2)}
                            </Typography>
                        </div>

                        <div className='row d-flex justify-content-between'>
                            <div className='col-4'>
                                <Typography variant="h6">
                                    Total : ₹ {calculateTotal().toFixed(2)}
                                </Typography>
                            </div>
                            <div className='col-4'>
                                <Button variant="contained" color="primary" style={{ float: 'right' }} onClick={handleNavigateToBill}>
                                    Bill
                                </Button>
                            </div>
                        </div>
                    </>

                </CardContent>
            </Card>
        </div>

    );
};

export default Bill;
