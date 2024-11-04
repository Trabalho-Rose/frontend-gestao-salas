import { ref } from 'vue';
import axios from 'axios';


  const url = "http://localhost:8080/"

  const axiosInstance = axios.create({
    baseURL: url,
  })
  
  const cursos = ref([])

  async function getCurso(){
    axios.get('http://localhost:8080/curso')
    
    .then(res => {
      cursos.value = res.data
    })
    .catch(error => console.log(error))
  }
  getCurso() 

  function addCurso(){
    const nomeCurso = document.getElementById("name")
    const descricao = document.getElementById('descricao')

    console.log(nomeCurso.value)
    console.log(descricao.value)

    const exNewCouse = {
      id: "1",
      nome: nomeCurso.value,
      descricao: descricao.value
    }

    axios.post('http://localhost:8080/curso', exNewCouse)
    .then(res => {
      cursos.value = res.data
      alert("Seu curso foi adicionado.")
      getCurso()
    })
    .catch(error => console.log(error))
  }
  //addCurso()


//-------------update and delete functions------------
  // function updateOrder(){
    //  axios.put('http://localhost:8080/pedido/3/concluir', {
    //    itens: "cachorro quente",
    //    quantidade: 10,
    //    mesa: "mesa 5",
    //    statusDoPedido: "Em andamento"
    //  })
    //  .then(Response => {
    //    alert(JSON.stringify(Response.data))
    //  })
    //  .catch(error => console.log(error))
    // }
    //  updateOrder()

    

    //  function deleteOrder(){
    //  axios.delete('http://localhost:8080/pedido/4/concluir')
    //  .then(Response => {
    //    alert(JSON.stringify(Response.data))
    //  })
    //  .catch(error => console.log(error))
    // }
    //  deleteOrder()

    //get methods of professor
    

    // const listProfessores = async () => {
    //    try{
    //     const response = await axiosInstance.get("/professor")
    //     console.log(response);
    //     return response;
    //    }catch(error){
    //     console.log(error);
    //    }
    // }

    // const listSalas = async () => {
    //   try{
    //     const response = await axiosInstance.get("/salas")
    //     console.log(response);
    //     return response;
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    // const listTurmas = async () => {
    //   try{
    //     const response = await axiosInstance.get("/turma");
    //     console.log(response);
    //     return response;
        
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    // const listCurso = async () => {
    //   try{
    //     const response = await axiosInstance.get("/curso");
    //     console.log(response);
    //     return response;
        
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    // const listDisciplina = async () => {
    //   try{
    //     const response = await axiosInstance.get("/disciplina");
    //     console.log(response);
    //     return response;
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    // const init = async () => {
    //   const {data: professor} = await listProfessores();
    //   const {data: salas} = await listSalas();
    //   const {data: turma} = await listTurmas();
    //   const {data: curso} = await listCurso();
    //   const {data: disciplina} = await listDisciplina();

    //   teachers.value = professor;
    //   console.log(professor);
    //   console.log(salas);
    //   console.log(turma);
    //   console.log(curso);
    //   console.log(disciplina);
    // }
    // init()
    
   export {getCurso, cursos, addCurso}
  