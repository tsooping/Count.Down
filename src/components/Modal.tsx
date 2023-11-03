import {useState} from "react";

const Modal = () => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <div></div>
  )
}

export default Modal