import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import mailReducer from './mailSLice';
import mailReceivedReducer from './mailRecievedSLice'
const store = configureStore({
    reducer: {auth:authReducer, mail: mailReducer, mailReceive: mailReceivedReducer}
});

export default store;