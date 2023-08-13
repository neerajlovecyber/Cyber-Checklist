import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Loginpage' element={<Loginpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
