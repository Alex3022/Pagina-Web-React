import { useModal } from "./useModal.js"
import Modal from "./modal"

const ModalLogin = () => {
    const [isOpenModalLogin, openModalLogin, closeModalLogin ] = useModal(false)
    return(
        <div>
            <button onClick={openModalLogin}> Login </button>
            <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
                <h1>Iniciar Sesión</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button class="opacity">Ingresar</button>
                </form>
            </Modal>
        </div>
    )
}

export default ModalLogin