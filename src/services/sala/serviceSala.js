import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listSalas = async () => {
    try{
      const response = await axiosInstance.get("/sala")
      
      return response.data;
    }catch(error){
      console.log(error);

      return [];
    }
  }

export default listSalas