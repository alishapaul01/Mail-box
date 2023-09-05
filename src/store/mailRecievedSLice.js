import { createSlice } from '@reduxjs/toolkit';

const initialMailReceivedState = {receivedMail:[]}

const mailReceivedSlice = createSlice({
    name:'receivedMail',
    initialState:initialMailReceivedState,
    reducers : {
        replaceRecivedMail(state,action) {
            state.receivedMail = action.payload.mail;

        },
        }

});

export const mailReceivedActions = mailReceivedSlice.actions;

export default mailReceivedSlice.reducer;