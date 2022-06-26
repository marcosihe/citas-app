import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  
  const deletePatient = id => {
    const UPDATED_PATIENT_LIST = patients.filter( item => item.id !== id)
    setPatients(UPDATED_PATIENT_LIST)
  }

  return (
    <div className="container mx-auto pt-10 bg-gray-200">
      <header>
        <Header />
      </header>
      <main className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
