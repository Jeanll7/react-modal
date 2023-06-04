import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  console.log("open:", open);

  return (
    <>
      <div>
        <h2 style={{ color: "white" }}>
          Click para abrir o <span>MODAL</span>
        </h2>
        <button
          style={{ background: "#0317ca", color: "white" }}
          onClick={() => setOpen(!open)}
        >
          Click aqui
        </button>
        <Modal
          isOpen={open}
          setOpen={setOpen}
          title={"Titulo do modal"}
          description={"descrição do modal"}
        />
      </div>
      <div></div>
    </>
  );
}

export default App;
