import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/homePage"
import NavBar from "./components/NavBar"
import Register from './pages/register';
import Login from "./pages/login"

function App() {
  return (
    <div >
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
