import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

function App() {
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
