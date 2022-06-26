import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [patients, setPatients] = useState([]);
  return (
    <div className="container mx-auto pt-10 bg-gray-200">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario patients={patients} setPatients={setPatients} />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
