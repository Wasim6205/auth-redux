import { axiosInstance } from "../config/axiosInstance";

export let getRecipesDataApi = async () => {
    try {
      let res = await axiosInstance.get("/recipes");
      return res.data.recipes
    } catch (error) {
      console.log("error in recipes api", error);
    }
};