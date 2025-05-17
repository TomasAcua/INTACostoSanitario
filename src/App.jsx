import "./App.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import FormularioPlan from "./components/FormularioPlan/FormularioPlan";
import Costo from "./components/Costo/Costo";
import Dolar from "./components/Dolar/Dolar";
import AgregarPlan from "./components/AgregarPlan/AgregarPlan";


function App() {
  const [formularios, setFormularios] = useState([0]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [refresh, setRefresh] = useState(0)

  const agregarFormulario = () => {
    setFormularios((prev) => [...prev, prev.length]);
  };


  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-xl shadow-md w-full max-w-8xl mx-auto">

      <div className="">

        <Dolar />
        <button onClick={() => setRefresh((r) => r + 1)}>Actualizar</button>
        <Costo key={refresh} productos={productosSeleccionados} />
      </div>

      <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
        Visualizador de costos sanitarios
      </h1>

      {formularios.map((id) => (
        <FormularioPlan key={id} formId={id}/>
      ))}

      <button
        onClick={agregarFormulario}
        className="mt-6 flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition cursor-pointer"
      >
        <FaPlus />
        Agregar plan
      </button>
      
    </div>
  );
}

export default App;
