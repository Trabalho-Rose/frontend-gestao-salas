import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listCurso = async () => {
    try{
      const response = await axiosInstance.get("/curso");
      console.log(response);
      return response;
      
    }catch(error){
      console.log(error);
    }
}

const initCurso = async () => {
    const {data: curso} = await listCurso(); 

    console.log(curso);
    
}

initCurso()

export {initCurso}