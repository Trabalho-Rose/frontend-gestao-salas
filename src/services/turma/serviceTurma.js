import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
  baseURL: url,
});

let items = [];

const listTurmas = async () => {
  try {
    const response = await axiosInstance.get("/turma");
    items = response.data;
    return items; 
  } catch (error) {
    console.log(error);
    return [];
  }
}

const getItemsTurma = async () => items;

const addTurma = async (newTurma) => {
  // const name = document.getElementById('name');
  // const studentsNumber = document.getElementById('studentsNumber');

  // const newTurma = {
  //   nome: name.value,
  //   qtdAlunos: studentsNumber.value
  // };

  try {
    const response = await axiosInstance.post('/turma', newTurma);
    await listTurmas();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const updateTurma = async (turma) => {
  try {
    const response = await axiosInstance.put(`/turma/${turma.id}`, turma);
    await listTurmas();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const deleteTurma = async (id) => {
  try {
    const response = await axiosInstance.delete(`/turma/${id}`);
    await listTurmas();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}



export { listTurmas, getItemsTurma, addTurma, updateTurma, deleteTurma }