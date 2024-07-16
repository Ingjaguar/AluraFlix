import Formulario from "../Formulario/Formulario.js";

export default function Modal(props) {

    const { equipos, registrarColaborador, closeModal } = props;

    return(
        <dialog id="my_modal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                    <Formulario 
                        equipos={equipos}
                        registrarColaborador={registrarColaborador}
                        closeModal={closeModal}
                    />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}