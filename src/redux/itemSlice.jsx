import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

export const getItemsAsync = createAsyncThunk(
    'items/getItemsAsync', async()=>{
        const response = await fetch("https://aveosoft-react-assignment.herokuapp.com/products");
        if (response.ok){
            const items = await response.json();
            return { items };
        }
    }
)

export const itemSlice = createSlice({
    name: "items", 
    initialState: [],
    reducers:{
        deleteItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload.id);
        },
    },
    extraReducers:{
        [getItemsAsync.fulfilled]: (state,action)=>{
            return action.payload.items;
        },
    }
});

export const { deleteItem } = itemSlice.actions;
export default itemSlice.reducer;



