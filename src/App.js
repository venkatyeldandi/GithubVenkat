import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';  

function App() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" Component={ShowList}/>
       <Route exact path="/shows/:id" Component={ShowDetails} />
      </Routes>
    </Router> 
  );
}

export default App;
