import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Problem from './pages/Problem';
import  Consoleeditor from './pages/SolveProblem';
import ContesList from './pages/ContesList';
import ContestPage from './pages/ContestPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/problem' element={<Problem/>}></Route>
      <Route path='/solve' element={<Consoleeditor/>}></Route>
      <Route path='/contest' element={<ContesList/>}></Route>
      <Route path='/contestall' element={<ContestPage/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
