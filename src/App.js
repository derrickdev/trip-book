import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './components/Create/Create'
import Update from './components/Update/Update'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/create' element ={<Create/>}></Route>
        <Route path='/edit/:id' element ={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
     
    )
  }
export default App;
