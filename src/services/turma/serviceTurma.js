import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
  baseURL: url,
})

const listTurmas = async () => {
  try {
    const response = await axiosInstance.get("/turma");
    return response.data; 
  } catch (error) {
    console.log(error);
    return [];
  }
}

const addTurma = async () => {
  const name = document.getElementById('name');
  const studentsNumber = document.getElementById('studentsNumber');

  const newTurma = {
    nome: name.value,
    qtdAlunos: studentsNumber.value
  };

  try {
    const response = await axiosInstance.post('/turma', newTurma);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateTurma = async (turma) => {
  try {
    const response = await axiosInstance.put(`/turma/${turma.id}`, turma);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const deleteTurma = async (id) => {
  try {
    const response = await axiosInstance.delete(`/turma/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}



export { listTurmas, addTurma, updateTurma, deleteTurma }