import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../components/Header';
import config from '../config';
const API = `${config.api_url}/`;




const Home = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
      <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="450"
        image="https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDY1OTQ1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          solutex
        </Typography>
        <Typography variant="body2" color="text.secondary">
          somos una solucion para el pago de nomina de tu empresa de textiles
        </Typography>
      </CardContent>
    </Card>
    
      </div>
    </>
  );
}

export default Home;
