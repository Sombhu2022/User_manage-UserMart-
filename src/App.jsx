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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { getUserAndUpdateState} = useAuthActions()
  const { user , isAuthenticated , status} = useSelector(state => state.user)
    
   useEffect(()=>{
      const res = getUserAndUpdateState()
      // console.log(res);
   },[isAuthenticated , status])

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />


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
     </>
  )
}

export const baseUrl = 'https://fakestoreapi.com'
export default App