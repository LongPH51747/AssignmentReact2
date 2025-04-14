import axios from "axios"
import { setListUser } from "../reducer/userreducer"

export type User = {
    id?: string,
    name: string, 
    username: string,
    password: string,
    sdt: string
}

const apiUrl="http://10.24.43.149:3000/user"

export const getListUserAction = () => async(dispatch: any) => {
    try {
        const repon = await axios.get(apiUrl)        
        dispatch(setListUser(repon.data))
    } catch (error) {
        console.log(error);
    }
}