import React from 'react'
import "../style/header.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { Typography } from '@material-ui/core';
import logo from "../asset/logo2.jpg"

const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    window?.location?.pathname === "/" ? navigate("/customer") : navigate("/");
    
  }
  return (
    <header style={{ width: '100%', backgroundColor: '#6287ee', padding: '10px', zIndex: '1000', position: 'relative', color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <div className='d-flex align-item-center justify-content-center'>
          <img src={logo} style={{ width: '40px', height: '40px',marginRight: '7px', objectFit: 'cover', borderRadius: '50%'}}/>
          <Typography variant="h5" className='mt-1'>Bill Application</Typography>
        </div>
        
        { window?.location?.pathname === "/" && <Button sx={{ color: "black" , bgcolor: "#dfefff", '&:hover': { backgroundColor: 'inherit', color: 'inherit' }}} onClick={handleClick} variant="contained" size="small">
            <AddIcon sx={{ fontSize: "medium"}}/>
           {"New Bill"}
        </Button>}
        {/* { (window?.location?.pathname === "/" || window?.location?.pathname === "/bill") && (<Button sx={{ color: "black" , bgcolor: "#dfefff", '&:hover': { backgroundColor: 'inherit', color: 'inherit' }}} onClick={handleClick} variant="contained" size="small">
          {
            window?.location?.pathname === "/" ? 
            (
            <>
            <AddIcon sx={{ fontSize: "medium"}}/>
           {"New Bill"}
           </>
           ) : (
           <>
           <MeetingRoomOutlinedIcon sx={{ fontSize: "medium"}}/>
            {"Home"}
            </>)
          }
          
        </Button>)} */}
      </div>
    </header>
  )
}

export default Header;