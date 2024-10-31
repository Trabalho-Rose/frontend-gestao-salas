import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listSalas = async () => {
    try{
      const response = await axiosInstance.get("/sala")
      console.log(response);
      return response;
    }catch(error){
      console.log(error);
    }
  }

const initSala = async () => {
    const {data: sala} = await listSalas(); 

    console.log(sala);
    
}

initSala()

export {initSala}