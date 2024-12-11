
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Pagentfound from './pages/Pagentfound'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Pagentfound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
