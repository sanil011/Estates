import { createSlice } from '@reduxjs/toolkit'
import Data from "../stays.json"

const initialState = {
    data: Data,
    price: "0",
    price1:"10000",
    Location: "",
    Property: "",
    When: "",
    Result: false,
    detail: false,
    filterData: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        Detail: (state, action) => {
            state.detail = action.payload
        },
        price: (state, action) => {
            state.price = action.payload
            console.log(state.price)
        },
        price1: (state, action) => {
            state.price1 = action.payload
        },
        location: (state, action) => {
            state.Location = action.payload
            console.log(action.payload)
        },
        property: (state, action) => {
            state.Property = action.payload
        },
        when: (state, action) => {
            state.When = action.payload
        },
        filter(state, action) {
            let filteredItem = [...initialState.data];
            (state.price || state.price1 )&& (filteredItem = filteredItem.filter((db) => +db.Price >= +state.price && +state.price1 >= +db.Price))

            state.Location && (filteredItem = filteredItem.filter((db) => db.city.toUpperCase() == state.Location.toUpperCase()))
            
            state.Property != "All" ? (filteredItem = filteredItem.filter((db) => db.type == state.Property)) :(filteredItem = filteredItem)
            
            state.When && (filteredItem = filteredItem.filter((db) => new Date(db.date).toLocaleDateString() === new Date(state.When).toLocaleDateString()))

            
             
            if (filteredItem.length === 0) {
                state.Result = true;
            } else {
                state.Result = false;
            }
            console.log(filteredItem)
            state.data = filteredItem
        },
        filterDetail(state, action) {
            let filteredItem = [...initialState.data];
            state.detail && (filteredItem = filteredItem.filter((db, idx) => idx == state.detail))
            console.log(filteredItem);
            state.filterData = filteredItem
        }
    }

})

export default filterSlice.reducer

export const filterActions = filterSlice.actions;