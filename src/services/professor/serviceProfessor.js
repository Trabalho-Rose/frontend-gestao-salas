import axios from "axios";
// import { ref } from "vue";

// const dialog = ref(false);
// const teacher = ref({});

// const teacher = ref([])



const url = "http://localhost:8080/"

const axiosInstance = axios.create({
    baseURL: url,
})

const listProfessor = async () => {
    try{
     const response = await axiosInstance.get("/professor")
     return response.data;
    }catch(error){
     console.log(error);
     return [];
    }
}

// function addProfessor(){
//     const nomeProfessor = document.getElementById('name')
//     const diasTrabalhados = document.getElementById('workedDays')

//     console.log(nomeProfessor.value)
//     console.log(diasTrabalhados.value)

//     const exNewTeacher = {
//       nome: nomeProfessor.value,
//       diasTrabalhados: diasTrabalhados.value
//     }

//     axios.post('http://localhost:8080/professor', exNewTeacher)
//     .then(res => {
//       teacher.value = res.data
//       alert("Seu curso foi adicionado.")
//       listProfessor()
//     })
//     .catch(error => console.log(error))
//   }

  const addProfessor = async () => {
    const nomeProfessor = document.getElementById('name')
    const diasTrabalhados = document.getElementById('workedDays')

    const exNewTeacher = {
      nome: nomeProfessor.value,
      diasTrabalhados: diasTrabalhados.value
    }
    
    try {
        const response = await axiosInstance.post("/professor", exNewTeacher);
        return response.data;
    }catch (error) {
        console.log(error);
    }
  }

const updateProfessor = async (teacher) => {
    try{
        const response = await axiosInstance.put(`/professor/${teacher.id}`, teacher);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

const deleteProfessor = async (id) => {
    try{
        const response = await axiosInstance.delete(`/professor/${id}`);
        return response.data;
    }catch(error){
        console.error("Erro ao excluir professor:", error.response ? error.response.data : error.message);
    }
}

export { listProfessor, addProfessor, updateProfessor, deleteProfessor }