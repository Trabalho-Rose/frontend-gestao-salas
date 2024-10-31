import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listProfessores = async () => {
    try{
     const response = await axiosInstance.get("/professor")
     console.log(response);
     return response;
    }catch(error){
     console.log(error);
    }
}

const initProfessor = async () => {
    const {data: professor} = await listProfessores(); 

    console.log(professor);
    
}

initProfessor()

export {initProfessor}