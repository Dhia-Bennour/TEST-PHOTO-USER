import React from 'react';
import UserTable from './components/userTable';
import Galerie from './components/galerie';

import { Route ,Switch} from "react-router-dom";
 
import './App.css';

function App() {
  return (
    <div className="App">
              <Route exact path="/" component={UserTable} />
           <Switch>
           <Route exact path="/:userId" render={ (props) => <Galerie {...props}  />} />          
        </Switch>
  
    </div>
  );
}

export default App;
