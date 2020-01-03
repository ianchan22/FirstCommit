import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import axios from 'axios';

import LoadPageIndicator from './iLoadPageIndicator'
import UserOverview from './iUserOverview';

// import UserInfo from './iUserInfo';
// import UserGallery from './iComponents/iUserGallery';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfos, setUserInfos] = useState([]);
  useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        setUserInfos(result.data)
        setIsLoading(false)
      })
      .catch(error => {
        document.write(error)
      })
  }, [])
  if (isLoading) {
    return <LoadPageIndicator />                                             // no variable passing
    // return <LoadingIndicator width="200px" height="200px" color="green"/>     // with variable passing
  }
  return (
    <div>
      {userInfos.map(XXX => {
        return <UserOverview id = {XXX.id} />
        // return <UserOverview username = {XXX.username} />
        // return <UserOverview profileImage = {XXX.profileImage} />
      })}
    </div>
  );

}
export default HomePage

  // return (
  //   <ul>
  //     {users.map(user => (
  //       <li>
  //         <h2>User ID   : {user.id}</h2>
  //         <h2>User Name : {user.username}</h2>
  //         <img src={user.profileImage} width="20px" height="20" alt="My awesome image" placeholderColor="#0083FE" />
  //       </li>
  //     ))}
  //   </ul>
  // );


  // return (
  //   <ul>
  //     {userInfos.map(eachItemXXX => (
  //       <li>
  //         userOverview id = {eachItemXXX.id}
  //         userOverview Name = {eachItemXXX.username}
  //       </li>
  //     ))}
  //   </ul>


