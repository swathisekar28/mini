import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListingsPage from './components/ListingsPage';
import PropertyDetails from './components/PropertyDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListingsPage} />
        <Route path="/property/:id" component={PropertyDetails} />
      </Switch>
    </Router>
  );
}

export default App;
