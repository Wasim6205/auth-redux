import { axiosInstance } from "../config/axiosInstance";

export let getTodosDataApi = async () => {
    try {
      let res = await axiosInstance.get("/todos");
      return res.data.todos
    } catch (error) {
      console.log("error in todos api", error);
    }
};