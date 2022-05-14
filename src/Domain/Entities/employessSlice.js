import { createSlice } from '@reduxjs/toolkit'

const emplyessEntity = {
  id: 0,
  title: "",
  age:""
}

const emplyessState = {
  list: [],
}
export const employessSlice  = createSlice({
    name: 'userSlice',
    initialState: emplyessState,
    reducers: {
      add: (state,action) => {
    
        state.push(action.payload)
      },
      remove: (state,action) => {
       //TODO remove function implementation
      },
      update: (state, action) => {
         //TODO update function implementation
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { add, remove, update } = employessSlice.actions
  
  export default employessSlice.reducer