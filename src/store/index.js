import { configureStore } from '@reduxjs/toolkit';
import alphaReducer from './alphaReducer';

const store = configureStore({ reducer: alphaReducer });

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify({}));
});

export default store;
