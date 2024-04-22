import { combineReducers } from '@reduxjs/toolkit';
import { authReducer as auth } from './slices/Auth';
import { notesReducer as notes } from './slices/Notes';

const alphaReducer = combineReducers({ auth, notes });

export default alphaReducer;
