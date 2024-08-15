import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";



export const allProductsFetch = createAsyncThunk('product/allProductsFetch',async()=>{
   
        const {data} = await axios.get(`${baseUrl}/products`,{
            headers: { "Content-Type": "application/json", },
        }
        );
     console.log(data);
     
      return data
})

export const productDetailsFetch = createAsyncThunk('product/productDetailsFetch' ,async(id)=>{

    const res = await axios.get(`${baseUrl}/products/${id}`,{
        headers: { "Content-Type": "application/json", },
    }
    );
  console.log(res);
    
  return res.data
})