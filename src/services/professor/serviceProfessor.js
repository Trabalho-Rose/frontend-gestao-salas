import axios from "axios";

const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

let items = [];

export const apiState = {
    success: false
}

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
      if(response.status === 200 || response.status === 201){
        apiState.success = true;
        await listProfessor();
        return response.data;
      } else {
        apiState.success = false
      }
      await listProfessor();
    } catch (error) {
        apiState.success = false;
        console.log(error);
    }
  }

const updateProfessor = async (teacher) => {
    try{
        const response = await axiosInstance.put(`/professor/${teacher.id}`, teacher);
        if(response.status === 200 || response.status === 201){
            apiState.success = true;
            await listProfessor();
            return response.data;
          } else {
            apiState.success = false
          }
          await listProfessor();
        } catch (error) {
            apiState.success = false;
            console.log(error);
        }
}

const deleteProfessor = async (id) => {
    try{
        const response = await axiosInstance.delete(`/professor/${id}`);
        if(response.status === 200 || response.status === 201){
            apiState.success = true;
            await listProfessor();
            return response.data;
          } else {
            apiState.success = false
          }
          await listProfessor();
        } catch (error) {
            apiState.success = false;
            console.log(error);
        }
}

export { listProfessor, getItemsProfessor, addProfessor, updateProfessor, deleteProfessor }