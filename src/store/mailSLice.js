import { createSlice } from '@reduxjs/toolkit';

const initialMailState = {sent:false, mail:[]}

const mailSlice = createSlice({
    name:'mail',
    initialState:initialMailState,
    reducers:{
        sent(state, action) {
            state.mail.push({
                ...action.payload
            })
        }
    }
})

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;