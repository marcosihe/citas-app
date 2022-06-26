import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  const fillForm = (
    name = "",
    owner = "",
    email = "",
    date = "",
    symptoms = ""
  ) => {
    setName(name);
    setOwner(owner);
    setEmail(email);
    setDate(date);
    setSymptoms(symptoms);
  };

  const generatePatientId = (textOne, textTwo) => {
    const RANDOM = Math.random().toString(36).slice(2);
    const CURRENT_DATE = Date.now().toString(36);
    const R_TEXT_ONE = textOne.slice(-1) + textOne.slice(0, 1);
    const R_TEXT_TWO = textTwo.slice(-1) + textTwo.slice(0, 1);
    return RANDOM + CURRENT_DATE + R_TEXT_ONE + R_TEXT_TWO;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic form validation
    if ([name, owner, email, date, symptoms].includes("")) {
      //
      setError(true);
      return;
    }

    setError(false);

    // Build patient object
    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      // Edit form / Edit Patient
      patientObject.id = patient.id;
      const UPDATED_PATIENTS = patients.map((statePatient) =>
        statePatient.id === patient.id ? patientObject : statePatient
      );
      setPatients(UPDATED_PATIENTS)
      setPatient({})
    } else {
      // New Patient
      patientObject.id = generatePatientId(name, owner);
      setPatients([...patients, patientObject]);
    }

    // Reset form
    fillForm();
  };

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      fillForm(
        patient.name,
        patient.owner,
        patient.email,
        patient.date,
        patient.symptoms
      );
    }
  }, [patient]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-400 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-colors"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
        {error && (
          <Error>
            <p>* Todos los campos son obligatorios</p>
          </Error>
        )}
      </form>
    </div>
  );
};

export default Form;
