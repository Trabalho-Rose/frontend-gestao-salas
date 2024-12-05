import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

let items = [];

//let success = false;
export const apiState = {
  success: false
}

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
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listCurso();
      return response.data;
    } else {
      apiState.success = false;
    }
    await listCurso();
  } catch(error){
    apiState.success = false;
    console.log(error);
  }
}

const updateCurso = async (course) => {
  try{
    const response = await axiosInstance.put(`/curso/${course.id}`, course);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listCurso();
      return response.data;
    } else {
      apiState.success = false;
    }
    await listCurso();
  } catch(error){
    apiState.success = false;
    console.log(error);
  }
}

const deleteCurso = async (id) => {
  try{
    const response = await axiosInstance.delete(`/curso/${id}`);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listCurso();
      return response.data;
    } else {
      apiState.success = false;
    }
    await listCurso();
  } catch(error){
    apiState.success = false;
    console.log(error);
  }
}

export { listCurso, getItems, addCurso, updateCurso, deleteCurso }