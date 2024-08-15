import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const allProductsFetch = createAsyncThunk('product/allProductsFetch',async()=>{
   
        const {data} = await axios.get(`https://fakestoreapi.com/products`,{
            headers: { "Content-Type": "application/json", },
        }
        );
     console.log(data);
     
      return data
})

export const productDetailsFetch = createAsyncThunk('product/productDetailsFetch' ,async(id)=>{

    const res = await axios.get(`https://fakestoreapi.com/products/${id}`,{
        headers: { "Content-Type": "application/json", },
    }
    );
  console.log(res);
    
  return res.data
})