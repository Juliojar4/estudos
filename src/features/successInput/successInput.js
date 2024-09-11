import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'triger',
    initialState: {
      value: false
    },
    reducers: {
      sendMensage: state => {
        state.value = true;
      },
    }
  });
  
export const { sendMensage } = counterSlice.actions;
export default counterSlice.reducer;