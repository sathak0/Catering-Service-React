import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
