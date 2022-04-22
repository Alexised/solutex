import React, { useEffect, useState } from 'react';

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
        <div className="row">
        </div>
      </div>
    </>
  );
}

export default Home;
