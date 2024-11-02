import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listProfessor = async () => {
    try{
     const response = await axiosInstance.get("/professor")
     return response.data;
    }catch(error){
     console.log(error);

     return [];
    }
}

export default listProfessor