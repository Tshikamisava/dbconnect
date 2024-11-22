
import React, { useState } from 'react';
import { Typography, TextField, Button } from "@mui/material";

export default function AddListingForm({ onAddProduct, onClose }) {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productToAdd = {
      id: Date.now(), // Generate unique ID
      title: newProduct.title,
      price: parseFloat(newProduct.price),
      description: newProduct.description,
      image: newProduct.image || '/images/placeholder.svg' // Default image if not provided
    };

    onAddProduct(productToAdd);
    setNewProduct({ title: '', price: '', description: '', image: '' }); // Reset form
    onClose(); // Close form after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create a New Listing
      </Typography>
      <TextField
        name="title"
        label="Product Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newProduct.title}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="price"
        label="Price"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={newProduct.price}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={newProduct.description}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="image"
        label="Image URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newProduct.image}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Listing
      </Button>
      <Button onClick={onClose} color="secondary" fullWidth>
        Cancel
      </Button>
    </form>
  );
}
