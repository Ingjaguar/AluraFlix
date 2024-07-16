import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    /* const equipos = [
        "Programacion", 
        "Front-End",
        "Data Science",
        "DevOps",
        "UX/UI",
        "Movil",
        "Proyectos"
    ] */ 
    /*
    SINTANXIS COMPLETA:
    {equipos.map( (equipo, index) => {
        return <option key={index}>{equipo}</option>
    })}

    SINTANXIS SIMPLIFICADA
    {equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
    */
   
    const {valor, equipos} = props;
    //console.log("equipos:", equipos);
    const manejarCambios = (evento) => {
        console.log("Cambio: ", evento.target.value);
        props.actualizarEquipo(evento.target.value);
    }

    return <div className="lista-opciones">
        <label>Categoria</label>
        <select value={valor} onChange={manejarCambios}>
            <option value="" defaultValue="" hidden required>Seleccionar Categoria</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo.titulo}>{equipo.titulo}</option>)}
        </select>        
    </div>
}
export default ListaOpciones;