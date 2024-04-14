import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const SnackBarMessage = (message, open) => {
//   const [open, setOpen] = useState(false);
console.log("message",message, open)
  const handleClick = () => {
    // setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // setOpen(false);
  };

  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={true}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default SnackBarMessage;