import React from 'react';
import { BrowserRouter, Switch, Route } from  "react-router-dom";

import ShowNavBar from './iComponents/iNavBar';
import HomePage from './iComponents/iHomePage';
import UserProfilePage from './iComponents/iUserProfilePage';

const App = () => {
  return(
    <BrowserRouter>

    <div>
    <ShowNavBar/>
      <Switch>
        <Route exact path="/"> <HomePage/> </Route>
        <Route exact path="/users/:id"> <UserProfilePage/> </Route>
      </Switch>
    </div>
    </BrowserRouter>
    );
}
export default App; 

// function App() {                                             // Standard Sample
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
