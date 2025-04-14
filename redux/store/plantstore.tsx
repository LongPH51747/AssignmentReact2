import {configureStore} from "@reduxjs/toolkit"
import PlantReducer from "../reducer/plantreducer"
import CategoryReducer from "../reducer/categoryreducer"
import UserReducer from "../reducer/userreducer"
const PlantStore = configureStore({
    reducer: {
        plant: PlantReducer,
        category: CategoryReducer,
        user: UserReducer
    }
})
export type RootState = ReturnType<typeof PlantStore.getState>;
export type AppDispatch = typeof PlantStore.dispatch
export default PlantStore