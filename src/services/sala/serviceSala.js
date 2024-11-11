import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listSalas = async () => {
    try{
      const response = await axiosInstance.get("/sala")
      
      return response.data;
    }catch(error){
      console.log(error);

      return [];
    }
  }

const addSala = async () => {
  const name = document.getElementById('name');
  const capacity = document.getElementById('capacity');
  const roomSituation = document.getElementById('roomSituation');

  const newSala = {
    nome: name.value,
    capacidade: capacity.value,
    situacaoSala: roomSituation.value
  }

  try {
    const response = await axiosInstance.post('/sala', newSala);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateSala = async (sala) => {
  try {
    const response = await axiosInstance.put(`/sala/${sala.id}`, sala);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const deleteSala = async (id) => {
  try {
    const response = await axiosInstance.delete(`/sala/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { listSalas, addSala, updateSala, deleteSala }