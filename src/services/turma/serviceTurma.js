import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listTurmas = async () => {
    try{
      const response = await axiosInstance.get("/turma");
      console.log(response.data);
      return response.data;
      
    }catch(error){
      console.log(error);
      
      return [];
    }
}



export default listTurmas