import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './views/Layout/Layout'
import ErrorPage from './views/error/ErrorPage'
import Register from './views/auth/Register'
import Login from './views/auth/Login'



function App() {


  return (
     <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        {/* <Route index element={<Home/>}/> */}
        </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
      </Routes>

     </Router>
    
  )
}

export default App