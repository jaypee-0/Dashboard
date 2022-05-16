import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
//import { useState } from 'react';

function App() {
  // const [token, settoken] = useState()

  // if(!token) {
  //   return <Login settoken={settoken} />
  // }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' elememnt={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
