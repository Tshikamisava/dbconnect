import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const LoanOptionsPage = () => {
  const loanOptions = [
    { name: 'Small Loan', interest: '5%', maxAmount: 'R10,000' },
    { name: 'Medium Loan', interest: '3.5%', maxAmount: 'R50,000' },
    // Add more options as needed
  ];

  return (
    <Grid container spacing={3} sx={{ py: 5 }}>
      {loanOptions.map((option, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">{option.name}</Typography>
              <Typography variant="body2">Interest Rate: {option.interest}</Typography>
              <Typography variant="body2">Max Amount: {option.maxAmount}</Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoanOptionsPage;