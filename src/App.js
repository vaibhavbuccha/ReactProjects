import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login /> 
          </Route>
          <Route exact path="/register">
            <SignUp /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
