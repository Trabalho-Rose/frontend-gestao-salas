import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

let items = [];

const listProfessor = async () => {
    try{
     const response = await axiosInstance.get("/professor")
     items = response.data;
     return items;
    }catch(error){
     console.log(error);
     return [];
    }
}

const getItemsProfessor = async () => items;

  const addProfessor = async (newProfessor) => {
    // const nomeProfessor = document.getElementById('name')
    // const diasTrabalhados = document.getElementById('workedDays')

    // const exNewTeacher = {
    //   nome: nomeProfessor.value,
    //   diasTrabalhados: diasTrabalhados.value
    // }
    
    try {
      const response = await axiosInstance.post("/professor", newProfessor);
      await listProfessor();
      return response.data;
    } catch (error) {
        console.log(error);
    }
  }

const updateProfessor = async (teacher) => {
    try{
        const response = await axiosInstance.put(`/professor/${teacher.id}`, teacher);
        await listProfessor();
        return response.data;
    }catch(error){
        console.log(error);
    }
}

const deleteProfessor = async (id) => {
    try{
        const response = await axiosInstance.delete(`/professor/${id}`);
        await listProfessor();
        return response.data;
    }catch(error){
        console.error("Erro ao excluir professor:", error.response ? error.response.data : error.message);
    }
}

export { listProfessor, getItemsProfessor, addProfessor, updateProfessor, deleteProfessor }