import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
});

let items = [];

export const apiState = {
  success: false
}

const listSorteio = async () => {
  try{
    const response = await axiosInstance.get("/sorteio");
    items = response.data;

    console.log('sorteios: ',items);
    return items;
    
  }catch(error){
    console.log('Erro ao buscar dados da api: ', error);
    return [];
  }
}
listSorteio()

const getItemsSorteio = async () => items;


const addSorteio = async (newItem) => {
  try {
    const response = await axiosInstance.post('/sorteio', newItem);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSorteio();
      return response.data
    } else {
      apiState.success = false
    }
  } catch (error) {
    apiState.success = false
    console.log(error);
  }
}

const updateSorteio = async (situacao) => {
  try {
    const response = await axiosInstance.put(`/sorteio/${situacao.id}`, situacao);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSorteio();
      return response.data
    } else {
      apiState.success = false
    }
  } catch (error) {
    apiState.success = false;
    console.log(error);
  }
}

const deleteSorteio = async (id) => {
  try {
    const response = await axiosInstance.delete(`/sorteio/${id}`);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSorteio();
      return response.data
    } else {
      apiState.success = false
    }
    await listSorteio();
    
  } catch (error) {
    apiState.success = false;
    console.log(error);
  }
}

const deleteAllSorteio = async () => {
  try {
    const response = await axiosInstance.delete(`/sorteio`);
    if(response.status === 200 || response.status === 201){
      apiState.success = true;
      await listSorteio();
      return response.data
    } else {
      apiState.success = false
    }
  } catch (error) {
    apiState.success = false;
    console.log(error.response);
    throw error;
  }
}

// const vincularTurma = async (salaId, turmaId) => {
//   try {
//     const response = await axiosInstance.post(`/sala/${salaId}/turma/${turmaId}`);
//     await listSalas();
//     return response.data;
//   } catch (error) {
//     console.log('Erro ao vicular turma', error);
//   }
// }

export { listSorteio, getItemsSorteio, addSorteio, updateSorteio, deleteSorteio, deleteAllSorteio }