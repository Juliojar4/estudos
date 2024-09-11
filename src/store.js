// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import sendMensage from './features/successInput/successInput';

export const store = configureStore({
  reducer: {
    counter: sendMensage
  }
});
