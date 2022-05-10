import { createSlice } from '@reduxjs/toolkit'

const initialState = {
count: 0
}

const Statemanagement = createSlice({
  name: 'second',
  initialState,
  reducers: {
      addCount: (state)=>{
        state.count += 1
      },
      minusCount: (state)=>{
        state.count -= 1
      }
  }
});

export const {addCount, minusCount, reset} = Statemanagement.actions

export default Statemanagement.reducer