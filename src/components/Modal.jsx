import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
