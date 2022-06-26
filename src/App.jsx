import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  return (
    <div className="container mx-auto pt-10 bg-gray-200">
      <header>
        <Header />
      </header>
      <main className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} />
        <PatientList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
