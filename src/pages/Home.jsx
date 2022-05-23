import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import config from "../config";
const API = `${config.api_url}/`;

const Home = () => {
  useEffect(() => {}, []);

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
              SOLUTEX es una herramienta desarrollada para que las empresas a
              nivel nacional no tengan este tipo de inconvenientes y permita a
              los propietarios de este tipo de empresas sistematizar sus
              procesos, organizar a sus empleados y liquidación de nómina
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Las empresas textiles en la actualidad siguen teniendo varios
              inconvenientes que, a lo largo de los años ha sido un factor común
              para el declive de las nuevas microempresas que quieran ingresar a
              este tipo de industria. Necesitamos entender que una empresa para
              poder crecer necesita de una adecuada sistematización,
              organización y lineamientos específicos en cuanto a sus
              colaboradores y los productos que fabrica para una correcta
              administración de los recursos y sus beneficios. Por lo antes
              expuesto, en este contexto, es necesario analizar cómo se puede
              dar solución a este tipo de inconvenientes que resultan casi
              fatales para que una empresa textil sobreviva, y con el propósito
              de llevar esta industria hacia las nuevas tecnologías, se pretende
              integrar los procesos administrativos y operativos con la
              sistematización de los mismos para lograr un nuevo enfoque y
              llevar esta industria a otro nivel, donde los procesos de cada
              área sean llevados en orden y con pérdida mínimas de información.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
