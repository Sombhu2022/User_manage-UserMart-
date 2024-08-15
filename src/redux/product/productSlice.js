import { createSlice } from "@reduxjs/toolkit";
import { allProductsFetch, productDetailsFetch } from "./productController";


const initialState = {
    products:[] , 
    selectProduct:{},
    status:{
        productsFetch: "",
        productDetailsFetch: "",

    },
    message:'',
    error:''
}

 const productSlice = createSlice({
    name:'product' , 
    initialState,
    reducers:{
        resetProductState(state , action){
            state.error=''
            state.message=''
            state.status.productDetailsFetch = ''
            state.status.productsFetch = ''
            
            }
     },
    extraReducers:(builder)=>{
        builder
           .addCase(allProductsFetch.pending , (state , action)=>{
            state.status.productsFetch = 'pending'
           })
           .addCase(allProductsFetch.fulfilled , (state , action)=>{
            state.status.productsFetch = 'success'
            state.products = action.payload
            state.message = 'all products are fetch'
           })
           .addCase(allProductsFetch.rejected , (state , action)=>{
            state.status.productsFetch = 'rejected'
            state.error = action.error
            state.message = "somthing error , product not fetched !"
           })




           .addCase(productDetailsFetch.pending , (state , action)=>{
            state.status.productDetailsFetch = 'pending'
           })
           .addCase(productDetailsFetch.fulfilled , (state , action)=>{
            state.status.productDetailsFetch = 'success'
            state.selectProduct = action.payload
            state.message = 'all products are fetch'
           })
           .addCase(productDetailsFetch.rejected , (state , action)=>{
            state.status.productDetailsFetch = 'rejected'
            state.error = action.error
            state.message = "somthing error , product not fetched !"
           })
    }

    
})

export const { resetProductState } = productSlice.actions

export default productSlice.reducer