import { combineReducers } from '@reduxjs/toolkit';
import { authReducer as auth } from './slices/Auth';
import { taskReducer as task } from './slices/Task';

const alphaReducer = combineReducers({ auth, task });

export default alphaReducer;
