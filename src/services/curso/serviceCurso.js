import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listCurso = async () => {
    try{
      const response = await axiosInstance.get("/curso");
      console.log(response.data);
      return response.data;
      
    }catch(error){
      console.log(error);
      return [];
    }
}

const addCurso = async () => {
  const getName = document.getElementById('name')
  const getDescription = document.getElementById('description')

  const newCourse = {
    nome: getName.value,
    descricao: getDescription.value
  }

  try{
    const response = await axiosInstance.post("/curso", newCourse);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateCurso = async (course) => {
  try{
    const response = await axiosInstance.put(`/curso/${course.id}`, course);
    return response.data;
  }catch(error){
    console.log(error);
  }
}

const deleteCurso = async (id) => {
  try{
    const response = await axiosInstance.delete(`/curso/${id}`);
    return response.data;
  }catch(error){
    console.log("Erro ao excluir curso: ", error);
    
  }
}

export { listCurso, addCurso, updateCurso, deleteCurso }