import { useState } from "react";
import { v4 as uuid } from 'uuid';
//import Formulario from "./componentes/Formulario/Formulario.js";
import Header from "./componentes/Header/Header.js";
//import MiOrg from "./componentes/MiOrg/index.js";
import Equipo from "./componentes/Equipo/index.js";
import Footer from "./componentes/Footer/index.js";
import Banner from "./componentes/Banner/index.js";
//import { BrowserRouter } from "react-router-dom";

function App() {
    // Operador Ternario: condicion ? esVerdadero : esFalso
    
    //const [mostrarFormulario, setMostrarFormulario] = useState(true);
    //Lista Colaboradores
    const [colaboradores, setColaboradores] = useState([
        {
            id: uuid(),
            equipo: "Programacion",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png",
            nombre: "Como utilizar el Display block, inline, inline-block",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/AG2QssLpQzI?si=6Yn355wcxAqU7_Ld"
        },
        {
            id: uuid(),
            equipo: "Proyectos",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png",
            nombre: "Como utilizar el Display block, inline, inline-block",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/AG2QssLpQzI?si=6Yn355wcxAqU7_Ld"
        },
        {
            id: uuid(),
            equipo: "Movil",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
            nombre: "Productividad en el trabajo remoto",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/AULPtYo25Lw?si=UGdKX1NSrEcQ0jfn"
        },
        {
            id: uuid(),
            equipo: "UX/UI",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Genesis.png",
            nombre: "¿Cuáles son las principales áreas de la programación?",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/03cxUlwLVt4?si=zVCUQNO-eS2RZQTO"
        },
        {
            id: uuid(),
            equipo:"DevOps",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Ale.png",
            nombre: "Detección de intruso con IA",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/5T_Q_NtNLZE?si=M7D0JeagaKqsoaFs"
        },
        {
            id: uuid(),
            equipo: "Data Science",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png",
            nombre: "Como utilizar el Display block, inline, inline-block",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/AG2QssLpQzI?si=6Yn355wcxAqU7_Ld"
        },
        {
            id: uuid(),
            equipo: "Front-End",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png",
            nombre: "Productividad en el trabajo remoto",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/AG2QssLpQzI?si=6Yn355wcxAqU7_Ld"
        },
        {
            id: uuid(),
            equipo: "Programacion",
            foto: "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
            nombre: "Como utilizar el Display block, inline, inline-block",
            puesto: "Developer",
            link: "https://www.youtube.com/embed/AULPtYo25Lw?si=UGdKX1NSrEcQ0jfn"
        }
    ]);
    // Lista Equipos
    const [equipos, setEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programacion",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
        {
            id: uuid(),
            titulo: "Front-End",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
        {
            id: uuid(),
            titulo: "DevOps",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
        {
            id: uuid(),
            titulo: "UX/UI",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
        {
            id: uuid(),
            titulo: "Movil",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
        {
            id: uuid(),
            titulo: "Proyectos",
            colorPrimario: "#353638",
            colorSecundario: "#636568",
        },
    ])

    //Modal
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        //console.log("Abrir modal desde App", showModal);        
    }
    const closeModal = () => {
        setShowModal(false);
    }

    // Enviamos la funcion como prop al componente MiOrg
    // Cambiar / Mostrar Formularios
    /* const cambiarMostrar = () => {
        setMostrarFormulario(!mostrarFormulario);
    }; */

    //Registrar Video--------------------------------
    const registrarColaborador = (colaborador) => {
        //console.log("NuevoColaborador: ", colaborador);
        //Spread operator:
        setColaboradores([...colaboradores, colaborador]);
    };

    // Eliminar Video
    const eliminarColaborador = (id) => {
        //console.log("Eliminar a: ", id);
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
        setColaboradores(nuevosColaboradores);
    }
    
    //Editar Video
    const editarVideo = (id) => {
        const video = colaboradores.find((colaborador) => colaborador.id !== id)
        //setColaboradores(video.id);
        openModal();
        document.getElementById('my_modal').showModal(video.id);
        //console.log("ID",video.id);
        
    }
    
    // Actualizar color equipo, agregamos un ID por si existen dos equipos con el mismo nombre
    const actualizarColor = (color, id) => {
        //console.log("Actualizar: ", color, id);
        const equiposActualizados = equipos.map( (equipo) => {
            if(equipo.id === id){
                equipo.colorPrimario = color
            }
            return equipo
        })
        setEquipos(equiposActualizados);
    }
    
    // Crear Equipo--------------------------------
    /* const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo);
        setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
    } */

    // favorito
    /* const like = (id) => {
        console.log("like: ", id);
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.favorito = !colaborador.favorito
            }
            return colaborador
        })
        setColaboradores(colaboradoresActualizados);
    } */

    return (
        
        <div className="">
            <Header 
                openModal={openModal} 
                closeModal={closeModal}
                equipos={equipos}
                registrarColaborador={registrarColaborador}
            />
            {/* 3 formas de utilizar el Operador Ternario: */}
            {/* mostrarFormulario === true ? <Formulario /> : <></> */}
            {/* mostrarFormulario ? <Formulario /> : <></> */}
            {/* Condicion && esVerdadero */}
            <Banner />
            
            {/* {mostrarFormulario && <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            } */}
            
            {/* Funcion para cambiar Mostrar/Ocultar Formulario */}
            {/* <MiOrg cambiarMostrar={cambiarMostrar} /> */}
            
            {/* CREACION DE EQUIPOS */}
            {equipos.map((equipo) => {
                //console.log("Equipo:", equipo);
                return (
                    <Equipo
                        datos={equipo}
                        key={equipo.titulo}
                        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        link={colaboradores.link}
                        editarVideo={editarVideo}
                    />
                );
            })}

            <Footer />
            {/*
            Forma Simplificada: Quitar las {} y el return:
            {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titutlo}/>;)}          
            */}
        </div>
    );
}

export default App;
