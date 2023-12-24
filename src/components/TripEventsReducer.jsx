import {createSlice  } from "@reduxjs/toolkit";
import {eventsList} from '../data/TripEventsData'


const tripEventSlice = createSlice({
    name : 'events',
    initialState : eventsList,
    reducers : {
        AddMemory : (state,action) => {
            console.log(action);
            state.push(action.payload)
        },
        UpdateMemory : (state,action) => {
            const {id,destination,date,file,experience} = action.payload;
            const uMemory = state.find(event => event.id);
            if(uMemory) {
                uMemory.destination =destination;
                uMemory.date = date;
                uMemory.file = file;
                uMemory.experience = experience;
            }
        },
        deleteMemory : (state,action) => {
            const {id} =action.payload;
            const uMemory = state.find(event => event.id);
            if(uMemory) { 
                return state.filter(f => f.id !==id);
            }

        }
    }
})
export const {UpdateMemory,deleteMemory}  = tripEventSlice.actions
export const {AddMemory} = tripEventSlice.actions
export default tripEventSlice.reducer