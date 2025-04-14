import axios from "axios";
import {
  addCategory,
  deleteCategory,
  setListCategory,
  updateCategory,
} from "../reducer/categoryreducer";
import { Plant } from "./plantaction";

export type Category = {
    id?: string,
    value: string, 
}

export const apiUrl = "http://10.24.43.149:3000/category";

export const getCategory = () => async (dispatch: any) => {
  try {
    const repon = await axios.get(apiUrl);
    dispatch(setListCategory(repon.data));
  } catch (error) {
    console.log(error);
  }
};

export const addCategoryAction = (cate: Category) => async (dispatch: any) => {
  try {
    const repon = await axios.post(apiUrl, cate);
    dispatch(addCategory(repon.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategoryAction = (id: string) => async (dispatch: any) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch(deleteCategory(id));
  } catch (error) {
    console.log(error);
  }
};

export const updateCategoryAction =
  (cate: Category, id: string) => async (dispactch: any) => {
    try {
      await axios.put(`${apiUrl}/${id}`, cate);
      dispactch(updateCategory({ id, cate }));
    } catch (error) {
      console.log(error);
    }
  };

  export const isCategoryInUse = (categoryId: string, plantList: Plant[]): boolean => {
    return plantList.some((plant) => plant.category?.toString().trim() === categoryId.toString().trim());
  };
