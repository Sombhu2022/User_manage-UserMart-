import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './views/Layout/Layout'
import ErrorPage from './views/error/ErrorPage'
import Register from './views/auth/Register'
import Login from './views/auth/Login'
import Home from './views/Home/Home'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import useAuthActions  from './controllers/userControler'
import Dashboard from './views/dashboard/Dashboard'
import ProductList from './views/products/ProductList'
import ProductDetails from './views/products/ProductDetails'



function App() {
  const { getUserAndUpdateState} = useAuthActions()
  const { user , isAuthenticated} = useSelector(state => state.user)
    
   useEffect(()=>{
      const res = getUserAndUpdateState()
      console.log(res);
      
   },[isAuthenticated])

  return (
     <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
      </Routes>

     </Router>
    
  )
}

export default App