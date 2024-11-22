// MarketplaceListing.js
import React, { useState } from 'react';
import { Card, CardContent, CardActions, CardHeader, Typography, Button, Container, Grid } from "@mui/material";
import AddListingForm from './AddListingForm';
import ContactSellerModal from './ContactSellerModal';

const initialProducts = [
  {
    id: 1,
    title: "Handcrafted Wooden Chair",
    price: 199.99,
    description: "Beautifully crafted wooden chair, perfect for any home or office.",
    image: "/images/placeholder.svg"
  },
  // other products...
];

export default function MarketplaceListing() {
  const [products, setProducts] = useState(initialProducts);
  const [isAdding, setIsAdding] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const openContactModal = (product) => {
    setSelectedProduct(product);
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        SME Marketplace
      </Typography>

      {isAdding ? (
        <AddListingForm
          onAddProduct={handleAddProduct}
          onClose={() => setIsAdding(false)}
        />
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsAdding(true)}
            sx={{ marginBottom: '2rem' }}
          >
            Create New Listing
          </Button>

          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardHeader
                    title={product.title}
                    subheader={`$${product.price.toFixed(2)}`}
                    sx={{ textAlign: 'center' }}
                  />
                  <img
                    src={product.image}
                    alt={product.title}
                    width="100%"
                    height="auto"
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => openContactModal(product)}
                    >
                      Contact Seller
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {selectedProduct && (
        <ContactSellerModal
          open={contactModalOpen}
          onClose={closeContactModal}
          product={selectedProduct}
        />
      )}
    </Container>
  );
}
