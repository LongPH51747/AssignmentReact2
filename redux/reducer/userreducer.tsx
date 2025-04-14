import { createSlice } from "@reduxjs/toolkit"

export type User = {
    id: string,
    name: string, 
    username: string,
    password: string,
    sdt: string
}

type UserState = {
    lstUser: User[]
}

const initialState: UserState = {
    lstUser: []
}

const UserReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setListUser: (state, action) => {
            state.lstUser = action.payload
        }
    }
})

export const {setListUser} = UserReducer.actions
export default UserReducer.reducer