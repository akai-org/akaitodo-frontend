import { combineReducers } from '@reduxjs/toolkit';
import { authReducer as auth } from './slices/Auth';

const alphaReducer = combineReducers({ auth });

export default alphaReducer;
