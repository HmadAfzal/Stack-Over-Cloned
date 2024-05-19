
import { Container } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AskQuestion from './pages/AskQuestion'
import MainQuestion from './pages/MainQuestion'
function App() {
  return ( 
  <BrowserRouter> 
    <Header/>   
     <Container maxWidth='xl' >
<Routes>
     <Route path='/' element={<Home/>}></Route>
   <Route path='/ask/question' element={<AskQuestion/>}></Route>
     <Route path='/question/:id' element={<MainQuestion/>}></Route>
</Routes>

    </Container> 
      </BrowserRouter>
  )
}

export default App
