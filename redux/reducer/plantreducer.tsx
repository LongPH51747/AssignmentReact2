import { createSlice } from "@reduxjs/toolkit";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type Plant = {
    id: string,
    name: string,
    image: string,
    category: string,
    price: string,
    attribute: string,
    origin: string,
    size: string,
    quantity: string
}

type PlantState = {
    listPlant: Plant[]
}

const initialState: PlantState = {
    listPlant: []
}

const PlantReducer = createSlice({
    name: "plant",
    initialState,
    reducers: {
        setListPlant: (state, action)=>{
            state.listPlant = action.payload
        },
        addPlant: (state, action) => {
            state.listPlant.push(action.payload)
        },
        deletePlant: (state, action) => {
            state.listPlant = state.listPlant.filter(
                (sp: any) => sp.id != action.payload
            )
        },
        updatePlant: (state, action) => {
            const {id, plant} = action.payload
            state.listPlant = state.listPlant.map((sp)=>{
                return sp.id === id ? {...sp, ...plant} : sp;
            })
        }
    }
})

export const { setListPlant, addPlant, deletePlant, updatePlant } = PlantReducer.actions
export default PlantReducer.reducer