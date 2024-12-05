import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
});

let items = [];

export const apiState = {
  success: false
}

const listSalas = async () => {
  try{
    const response = await axiosInstance.get("/sala");
    items = response.data;
    console.log(items);
    
    return items;
  }catch(error){
    console.log('Erro ao listar salas', error);
    return [];
  }
}

const getItemsSala = async () => items;

const addSala = async (newSala) => {
  // const name = document.getElementById('name');
  // const capacity = document.getElementById('capacity');
  // const roomSituation = document.getElementById('roomSituation');

  // const newSala = {
  //   nome: name.value,
  //   capacidade: capacity.value,
  //   situacaoSala: roomSituation.value
  // }

  try {
    const response = await axiosInstance.post('/sala', newSala);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSalas();
      return response.data;
    } else {
      apiState.success = false
    }
    
  } catch (error) {
    apiState.success = false
    console.log(error);
  }
}

const updateSala = async (sala) => {
  try {
    const response = await axiosInstance.put(`/sala/${sala.id}`, sala);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSalas();
      return response.data;
    } else {
      apiState.success = false
    }
  } catch (error) {
    apiState.success = false
    console.log(error);
  }
}

const deleteSala = async (id) => {
  try {
    const response = await axiosInstance.delete(`/sala/${id}`);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSalas();
      return response.data;
    } else {
      apiState.success = false
    }
  } catch (error) {
    apiState.success = false
    console.log(error);
  }
}

const vincularTurma = async (salaId, turmaId) => {
  try {
    const response = await axiosInstance.post(`/sala/${salaId}/turma/${turmaId}`);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSalas();
      return response.data;
    } else {
      apiState.success = false
    }
  } catch (error) {
    apiState.success = false
    console.log('Erro ao vicular turma', error);
  }
}

export { listSalas, getItemsSala, addSala, updateSala, deleteSala, vincularTurma }