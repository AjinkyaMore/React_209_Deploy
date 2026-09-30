import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddStudent from './Components/AddStudent'
import Header from './Components/Header'
import Home from './Pages/Home'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import AdminDashboard from './Dashboard/AdminDashboard'
import UpdateStudent from './Components/UpdateStudent'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/register' element={<AddStudent/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
          <Route path='/update/:id' element={<UpdateStudent/>}></Route>
        </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
