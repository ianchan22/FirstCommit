import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const nameStyle = {
    fontSize: '100%',
    fontWeight: 'bold'
}

const imageStyle = {
    height: '200px',
    weight: '200px',
    borderRadius: '50%'
}

function UserInfo(props) {
    const [usrName, setUsrName] = useState('');
    const [usrProfPic, setUsrProfPic] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/users/${props.id}`)
            .then(result => {
                setUsrName(result.data.username)
                setUsrProfPic(result.data.profileImage)
                setIsLoading(false)
            })
            .catch(error => {
                document.write(error)
            })
    }, [])
    if (isLoading) {
        return (<p>Loading...</p>)             
        // return <LoadPageIndicator />                                       // no variable passing
        // return <LoadingIndicator width="200px" height="200px" color="green"/>     // with variable passing
    }
    return (
        <div>
            <Link to={`/users/${props.id}`} style={nameStyle}> {usrName}</Link>
            <p></p>
            {/* <p style={nameStyle} ></p> */}
            <img src={usrProfPic} style={imageStyle} alt=""/>
        </div>
    );

}
export default UserInfo

