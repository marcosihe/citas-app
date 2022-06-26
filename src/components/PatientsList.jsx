import Patient from "./Patient";

const PatientsList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-400 font-bold ">Pacientes y Citas</span>
      </p>
      <section
        className={`md:h-screen ${
          patients.length > 1 ? "overflow-y-scroll" : ""
        }`}
      >
        {patients && patients.length ? (
          <>
            {patients.map((patient) => {
              return (
                <Patient
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                  deletePatient={deletePatient}
                />
              );
            })}
          </>
        ) : (
          <section className="bg-white shadow-md rounded-lg py-5 mx-3 mb-3">
            <h3 className="font-black text-1xl text-center">
              Comienza agregando pacientes{" "}
              <span className="text-indigo-400 font-bold ">
                y aparecerán en este lugar
              </span>
            </h3>
          </section>
        )}
      </section>
    </div>
  );
};

export default PatientsList;
