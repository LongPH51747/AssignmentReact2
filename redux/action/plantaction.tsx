import axios from "axios";
import {
  addPlant,
  deletePlant,
  setListPlant,
  updatePlant,
} from "../reducer/plantreducer";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export type Plant = {
    id?: string,
    name: string,
    image: string,
    category: string,
    price: Double,
    attribute: string,
    origin: string,
    size: string,
    quantity: number
}
const apiUrl = "http://10.24.43.149:3000/plant";

export const getListPlantAction = () => async (dispatch: any) => {
  try {
    const repon = await axios.get(apiUrl);
    dispatch(setListPlant(repon.data));
  } catch (error) {
    console.log(error);
  }
};

export const addPlantAction = (plant: Plant) => async (dispatch: any) => {
  try {
    const repon = await axios.post(apiUrl, plant);
    console.log("Dữ liệu gửi lên:", plant);
    dispatch(addPlant(repon.data));
  } catch (error) {
    console.log(error);
  }
};

export const deletePlantAction = (id: any) => async (dispatch: any) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch(deletePlant(id));
  } catch (error) {
    console.log('lỗi tại action',error);
  }
};

export const updatePlantAction = (plant: Plant, id: string) => async (dispatch: any) => {
    try {
      await axios.put(`${apiUrl}/${id}`, plant);
      dispatch(updatePlant({ id, plant }));
    } catch (error) {
      console.log(error);
    }
  };
