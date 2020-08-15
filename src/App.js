import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './component/Chart';
import AppNavBar from './component/AppNavBar';
import { Container } from '@material-ui/core';

function App() {

  return (
    <React.Fragment>
        <AppNavBar/>

        <Container maxWidth='md'>
          <Chart />
        </Container>
    </React.Fragment>
  );
}

export default App;
