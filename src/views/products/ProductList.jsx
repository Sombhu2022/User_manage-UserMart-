import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allProductsFetch } from '../../redux/product/productController';
import { resetProductState } from '../../redux/product/productSlice';
import IsNotAuth from '../../components/IsNotAuth';

const ProductList = () => {
    const { isAuthenticated} = useSelector(state => state.user)
    const {products , status , message , error} = useSelector(state=>state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        
        if(isAuthenticated){
            dispatch(allProductsFetch())
        }
         
        return()=>{
            dispatch(resetProductState())
        }

      }, [dispatch , isAuthenticated]);


    
      if (status.productsFetch === 'pending') {
        return (
        <Loader/>
        );
      }
      if (error) return <p>{error}</p>;

      if(!isAuthenticated){
        return(<IsNotAuth  message={'You are not authenticated. Please log in to view product List.'}/>)
      }
   

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
