import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
});

let items = [];

const listSalas = async () => {
  try{
    const response = await axiosInstance.get("/sala");
    items = response.data;
    return items;
  }catch(error){
    console.log(error);
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
    await listSalas();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateSala = async (sala) => {
  try {
    const response = await axiosInstance.put(`/sala/${sala.id}`, sala);
    await listSalas();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const deleteSala = async (id) => {
  try {
    const response = await axiosInstance.delete(`/sala/${id}`);
    await listSalas();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

cosnt 

export { listSalas, getItemsSala, addSala, updateSala, deleteSala }