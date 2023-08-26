import './ModalLogin.css'

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation()
    return( //modal is-open //modal 
        <article className={`modal ${isOpen&&"is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick }>
                <button className="modal-close" onClick={closeModal}>x</button>
                {children}
            </div>
        </article>
    )
}

export default Modal