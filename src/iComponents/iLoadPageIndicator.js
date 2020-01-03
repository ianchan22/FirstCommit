import React from 'react';
// import React, {useState, useEffect, Component} from 'react';
import { Spinner } from 'reactstrap';
// import { Container, Row, Col, Spinner } from 'reactstrap';

const LoadPageIndicator = (props) => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul class="nav justify-content-center">
      {/* <Col sm="12" md={{ size: 6, offset: 3 }}>      </Col> */}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="primary"/>{' '}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="secondary"/>{' '}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="success"/>{' '}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="danger"/>{' '}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="warning"/>{' '}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="info"/>{' '}
      <Spinner size="xl" style={{ width: '3rem', height: '3rem' }} color="dark"/>{' '}
      </ul>

    </div>
  );
}

export default LoadPageIndicator;
