import './App.css'

import Home from './pages/Home'
import Profile from './pages/Profile'

import {
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
