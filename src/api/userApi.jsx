import { axiosInstance } from "../config/axiosInstance";

export let getUsersDataApi = async () => {
    try {
      let res = await axiosInstance.get("/users");
      return res.data.users
    } catch (error) {
      console.log("error in users api", error);
    }
  };