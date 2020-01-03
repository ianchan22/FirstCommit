import React, { useState, useEffect } from 'react';
// import { useParams, Link } from "react-router-dom";
import axios from 'axios';

// import LoadPageIndicator from './iLoadPageIndicator'

const imageStyle = {
    height: '240px',
    weight: '270px',
    // borderRadius: '50%'
}

const imageBlkStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    background: 'red'
}

function UserGallery(props) {
    const [uploadedImages, setUploadedImages] = useState([])
    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${props.id}`)
            .then(result => {
                setUploadedImages(result.data)
            })
        .catch(error => {
            document.write(error)
        })
    }, [])
    // if (isLoading) {
    //     return <LoadPageIndicator />                                             // no variable passing
    //     // return <LoadingIndicator width="200px" height="200px" color="green"/>     // with variable passing
    // }
    return (
        <div style={imageBlkStyle}>
            {uploadedImages.map(image => {
                return <img src={image} style={imageStyle} alt=""/>
            })
        }
        </div>
    );

}
export default UserGallery;

