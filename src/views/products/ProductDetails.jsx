import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Rate } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { productDetailsFetch } from '../../redux/product/productController';
import { resetProductState } from '../../redux/product/productSlice';
import Loader from '../../components/Loader';
import IsNotAuth from '../../components/IsNotAuth';

const ProductDetails = () => {

  const { id } = useParams(); // Retrieve the product ID from the URL
  const {isAuthenticated , status : userStatus} = useSelector(state => state.user)
  const {selectProduct : product, status , message , error} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    //fetch product details using useDispach , for simplicity  
    if(isAuthenticated ){
      dispatch(productDetailsFetch(id))     
    }
     return ()=>{
        dispatch(resetProductState())
     }

  }, [id , isAuthenticated , dispatch , userStatus ]);

  
  if (status.productDetailsFetch === 'pending') {
    return (
      <Loader/>
    );
  }

  if(!isAuthenticated){
   return(<IsNotAuth message={'You are not authenticated. Please log in to view product details.'}/>)
  }

  return (

    <div className="container mx-auto p-4 w-full min-h-[100vh]">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {product?.title}
          </h2>
          <p className="text-gray-600 mb-4">{product?.category}</p>
          <p className="text-3xl text-gray-900 font-semibold mb-4">
            ${product?.price}
          </p>
          <div className="flex items-center mb-4">
            <Rate disabled value={Math.round(product?.rating?.rate)} /> {/* Show star rating */}
            <span className="ml-2 text-gray-600">
              ({product?.rating?.count} reviews)
            </span>
          </div>
          <p className="text-gray-700 mb-6">
            {product?.description}
          </p>
          <button onClick={()=>navigate('/products')} className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors">
            Similer Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
