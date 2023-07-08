import { createSlice } from "@reduxjs/toolkit";

  const initial_state ={

    data:[]
  }
  
 export const todoSlice = createSlice({

    name:"todo",
    initialState:initial_state,
    reducers:{

         addTask:(state,action)=>{

            state.data = [...state.data,{id:Date.now(),name:action.payload.name}]
         },

         remove:(state,action)=>{
            const id=  action.payload.id

            state.data= state.data.filter((e)=>e.id !=id)
         }

        
    }
 })

 export const {addTask,remove} = todoSlice.actions

 export default todoSlice.reducer