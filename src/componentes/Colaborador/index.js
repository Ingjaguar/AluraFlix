import { Link } from "react-router-dom";
import "./Colaborador.css";

const Colaborador = (props) => {
    
    const {nombre,foto,id} = props.datos
    const { eliminarColaborador, link, editarVideo} = props
    //"https://github.com/ingjaguar.png"
    return (
        <>
            <div className="card bg-base-100 w-60 shadow-xl">
                <Link to={link}>
                    <figure>
                        <img src={foto} alt={nombre} />
                    </figure>
                </Link>
                
                <div className="card-body">
                    <h2 className="card-title justify-center">{nombre}</h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-neutral" onClick={() => eliminarColaborador(id)}>Borrar</button>
                        <button className="btn btn-primary" onClick={ () => editarVideo(id) }>Editar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Colaborador;
