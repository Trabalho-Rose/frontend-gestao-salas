import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

let items = [];

const listDisciplina = async () => {
  try{
    const response = await axiosInstance.get("/disciplina");
    items = response.data;
    return items;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const getItemsDisciplina = async () => items;

const addDisciplina = async (newDisciplina) => {
  // const name = document.getElementById('name');
  // const workload = document.getElementById('workload')

  // const newDisciplina = {
  //   nome: name.value,
  //   cargaHoraria: workload.value 
  // };

  try {
    const response = await axiosInstance.post('/disciplina', newDisciplina);
    await listDisciplina();
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

const updateDisciplina = async (disciplina) => {
  try{
    const response = await axiosInstance.put(`/disciplina/${disciplina.id}`, disciplina);
    await listDisciplina();
    return response.data;
  }catch(error){
    console.log(error);
  }
}

const deleteDisciplina = async (id) => {
  try{
    const response = await axiosInstance.delete(`/disciplina/${id}`);
    await listDisciplina();
    return response.data; 
  }catch(error){
    console.log("Erroa o excluir disciplina: ", error);
  }
}

export { listDisciplina, getItemsDisciplina, addDisciplina, updateDisciplina, deleteDisciplina }