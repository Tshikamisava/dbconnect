// ContactSellerModal.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

export default function ContactSellerModal({ open, onClose, product }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message sent to seller about:', product.title);
    onClose(); // Close the modal after submission
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Contact Seller for {product.title}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            name="name"
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="email"
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
