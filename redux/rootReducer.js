import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// імпортуйте інші ред'юсери

const rootReducer = combineReducers({
    user: userReducer,
    // додайте інші ред'юсери
});

export default rootReducer;