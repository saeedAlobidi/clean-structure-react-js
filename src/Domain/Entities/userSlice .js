import { createSlice } from '@reduxjs/toolkit'

const AgeState = {
  
  value: 25,
}
export const userSlice  = createSlice({
    name: 'userSlice',
    initialState: AgeState,
    reducers: {
      increment: (state) => {
    
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = userSlice.actions
  
  export default userSlice.reducer