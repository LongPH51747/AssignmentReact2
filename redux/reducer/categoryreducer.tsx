import { createSlice } from "@reduxjs/toolkit";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type Category = {
    id: string,
    value: string, 
}

type CategoryState = {
    listCategory: Category[]
}

const initialState: CategoryState = {
    listCategory: []
}

const CategoryReducer = createSlice({
    name: "category",
    initialState,
    reducers: {
        setListCategory: (state, action)=>{
            state.listCategory = action.payload
        },
        addCategory: (state, action) => {
            state.listCategory.push(action.payload)
        },
        deleteCategory: (state, action) => {
            state.listCategory = state.listCategory.filter(
                (plant: any) => plant.id != action.payload 
            )
        },
        updateCategory: (state, action) => {
            const {id, category} = action.payload
            state.listCategory = state.listCategory.map(
                (cat) => {return cat.id === id ? {...cat, ...category} : cat;}
            )
        }
    }
})

export const { setListCategory, addCategory, deleteCategory, updateCategory } = CategoryReducer.actions
export default CategoryReducer.reducer