import React from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import axios from 'axios';

// import LoadPageIndicator from './iLoadPageIndicator'
import UserInfo from './iUserInfo';
import UserGallery from './iUserGallery';

const pageStyle = {
    // display: 'flex',
    marginTop: '59px',
    background: '#eee',
    minHeight: '80px'
}
const ovStyle = {
    display: 'flex',
    marginTop: '5px',
    marginBottom: '5px',
    background: '#eee',
    minHeight: '80px'
}

function UserOverview(props) {
    return (
        // <Container style={pageStyle}>
        //     <Container xs="3">
        <Row>
            <Col>'                 '</Col>
            <Col xs="4" sm="4">
                <div style={ovStyle}><UserInfo id={props.id} /></div>
            </Col>
            <Col xs="6" sm="4"> <div style={ovStyle}> <UserGallery id={props.id} /> </div> </Col>
        </Row>
        // {/* </Container>
        //  <Container xs="auto" > */}

    );
}

export default UserOverview
