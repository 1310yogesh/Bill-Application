import React from "react";
import Dashboard from "../pages/dashboard";
import Customer from "../pages/customer";
import Bill from "../pages/bill";
import BillDetails from "../pages/BillDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../common/header";
import ThankYou from "../common/thankyou";
import NotFound from "../common/notFound";
import "../App.css"


function App() {
    return (
      <Router>
        <Header/>
          <Routes>
            <Route path="/"  element={<Dashboard/>}/>
            <Route path="/customer" element={<Customer/>} />
            <Route path="/preview" element={<BillDetails/>} />
            <Route path="/bill" element={<Bill/>} />
            <Route path="/thank-you" element={<ThankYou/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </Router>
    );
  }
  
  export default App;