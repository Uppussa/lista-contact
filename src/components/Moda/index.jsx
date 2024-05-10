import Form from "../Form"

const Modal = ({closeModal}) => {
    return (
        <div id="modal" class="modal">
            <div class="modal-content">
                <span onClick={closeModal} class="close">&times;</span>
                <h2>Agregar Contacto</h2>
                <Form />
            </div>
        </div>
    )
}

export default Modal
