import style from "./Modal.module.css";

interface Imodal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  description: string;
}

function Modal({ isOpen, setOpen, title, description }: Imodal) {
  if (isOpen) {
    return (
      <div className={style.background}>
        <div className={style.modal}>
          <h2>{title}</h2>
          <p>{description}</p>
          <button className={style.btn} onClick={() => setOpen(!isOpen)}>
            Fechar
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
