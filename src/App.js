// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import Register from './components/register';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome/:id" element={<Welcome />} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
