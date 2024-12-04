import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

let items = [];

const listCurso = async () => {
    try{
      const response = await axiosInstance.get("/curso");
      items = response.data;
      return items;
    }catch(error){
      console.log(error);
      return [];
    }
}

const getItems = async () => items;

const addCurso = async (newCourse) => {
  // const getName = document.getElementById('name')
  // const getDescription = document.getElementById('description')

  // const newCourse = {
  //   nome: getName.value,
  //   descricao: getDescription.value
  // }

  try{
    const response = await axiosInstance.post("/curso", newCourse);
    await listCurso();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateCurso = async (course) => {
  try{
    const response = await axiosInstance.put(`/curso/${course.id}`, course);
    console.log(response.data);
    if(response.data === 200){
      return response.data;
    } else {
      throw new Error('Erro ao atualizar curso')
    }
    
    await listCurso();
    console.log(items);
    
    return response.data;
  }catch(error){
    console.log(error);
  }
}

const deleteCurso = async (id) => {
  try{
    const response = await axiosInstance.delete(`/curso/${id}`);
    await listCurso();
    return response.data;
  }catch(error){
    console.log("Erro ao excluir curso: ", error);
    
  }
}

export { listCurso, getItems, addCurso, updateCurso, deleteCurso }