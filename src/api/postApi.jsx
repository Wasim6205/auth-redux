import { axiosInstance } from "../config/axiosInstance";

export let getPostsDataApi = async () => {
    try {
      let res = await axiosInstance.get("/posts");
      return res.data.posts
    } catch (error) {
      console.log("error in posts api", error);
    }
};