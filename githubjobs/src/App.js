import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JobLists from './components/JobLists';
import { JobDetails } from './components/JobDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path='/details'>
          <JobDetails />
        </Route>

        <Route path='/'>
          <JobLists />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
