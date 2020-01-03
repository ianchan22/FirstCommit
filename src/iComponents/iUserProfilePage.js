// import React, {useState, useEffect} from 'react';

import React from 'react';
import { useParams } from  "react-router-dom";

// import ShowNavBar from './iNavBar';
// import BodyHeader from './iBodyHeader';

function UserProfilePage() {
    const {id} = useParams()
    return(
        <h2> UserProfilePage, {id} </h2>
    ) 
}

export default UserProfilePage