import "./App.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import FormularioProducto from "./components/FormularioProducto/FormularioProducto";
function App() {
  const [formularios, setFormularios] = useState([0]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const agregarFormulario = () => {
    setFormularios((prev) => [...prev, prev.length]);
  };
const agregarProducto = (nuevoProducto) => {
  setProductosSeleccionados(prev => {
    const sinElAnterior = prev.filter(p => p.id !== nuevoProducto.id);
    return [...sinElAnterior, nuevoProducto];
  });
};
 
  useEffect(() => {
    localStorage.setItem("productosSeleccionados", JSON.stringify(productosSeleccionados))
  }, [
    productosSeleccionados 
  ]);
  useEffect(() => {
  const guardados = localStorage.getItem("productosSeleccionados");
  if (guardados) {
    setProductosSeleccionados(JSON.parse(guardados));
  }
}, []);
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-xl shadow-md w-full max-w-8xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
        Visualizador de costos sanitarios
      </h1>

      {formularios.map((id) => (
        <FormularioProducto key={id} formId={id}  agregarProducto={agregarProducto}/>
      ))}

      <button
        onClick={agregarFormulario}
        className="mt-6 flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition cursor-pointer"
      >
        <FaPlus />
        Agregar producto a comparar
      </button>
       {/* Para visualizar qué se seleccionó y debuggear*/}
      <pre>{JSON.stringify(productosSeleccionados, null, 2)}</pre>
    </div>
  );
}

export default App;
