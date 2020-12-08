import Home from './pages/Home'
import Profile from './pages/Profile'

import { Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [content, setContent] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [current, setCurrent] = useState(null);

  const apiURL = 'http://localhost:5050/data';

  useEffect(() => {
    axios.get(apiURL).then(response => setContent(response.data));
  }, []);

  const viewInfo = (id) => {
    const selectedUser = content.filter(user => user.id === id);
    setCurrent(selectedUser[0]);
  };

  const closeInfo = () => {
    setCurrent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(apiURL, {
      params: {
        q: searchInput
      }
    }).then(response => {
      setContent(response.data);
    });
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="App">
      {
        current == null ?
          <Route exact path="/">
            <Home
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              viewInfo={viewInfo}
              data={content} />
          </Route>
          :
          <Route path="/profile/:userId">
            <Profile
              data={current}
              closeInfo={closeInfo} />
          </Route>
      }
    </div>
  );
}

export default App;
