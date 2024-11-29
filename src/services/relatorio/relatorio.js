import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
});

let items = [];

const listSorteio = async () => {
  try{
    const response = await axiosInstance.get("/sorteio");
    console.log(response.data);
    console.log(items);
    items = response.data;
    return items;
    
  }catch(error){
    console.log(error);
    return [];
  }
}

const getItemsSorteio = async () => items;

const addSorteio = async (newItem) => {
  try {
    const response = await axiosInstance.post('/sorteio', newItem);
    await listSorteio();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateSorteio = async (situacao) => {
  try {
    const response = await axiosInstance.put(`/sorteio/${situacao.id}`, situacao);
    await listSorteio();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const deleteSorteio = async (id) => {
  try {
    const response = await axiosInstance.delete(`/sorteio/${id}`);
    await listSorteio();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const deleteAllSorteio = async () => {
  try {
    const response = await axiosInstance.delete(`/sorteio`);
  
    return response.data;
  } catch (error) {
    console.log(error);
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