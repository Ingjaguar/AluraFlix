import { Link } from 'react-router-dom';
import logo from "./logo-alura.png";
import Modal from '../Modal';



export default function Header(props) {
    
    const activarModal = () => {
        //console.log("Abrir Modal", openModal);
        document.getElementById('my_modal').showModal();
    }

    const { closeModal, equipos, registrarColaborador, crearEquipo} = props;

    return (
    <header className="">
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link className='btn btn-ghost text-xl' to="/">
                    <img src={logo} alt="logoAlura" /><span>Flix</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/"><button className='btn mx-2'>HOME</button></Link>
                        <button className='btn mx-2' onClick={activarModal}>NUEVO VIDEO</button>
                    <Modal 
                        closeModal={closeModal}
                        equipos={equipos}
                        registrarColaborador={registrarColaborador}
                        crearEquipo={crearEquipo}    
                    />
                </ul>
            </div>
        </div>    
    </header>
    )
}