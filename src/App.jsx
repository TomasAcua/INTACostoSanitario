import { useEffect, useState } from 'react';
import Graphic from './components/Graphic/Graphic';
import FormularioPlan from './components/FormularioPlan/FormularioPlan';
import Button from './components/Button/Button'
import ProductsList from './components/ProductsList/ProductsList';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './components/PDF/PDFDocument';
import './App.css';

function App() {
  const [chartImage, setChartImage] = useState(null)
  const [plans, setPlans] = useState([]);
  const [mostrarPDF, setMostrarPDF] = useState(false);


  useEffect(() => {
    const planesObj = JSON.parse(localStorage.getItem('productosPorFormulario')) || {};
    // console.log("planesObj:", planesObj);
    const planesArray = Object.values(planesObj);
    console.log("planesArray:", planesArray);
    setPlans(planesArray);
}, []);


  const agregarFormulario = () => {
    setPlans((prev) => [...prev, prev.length]);
  };

  const generarPDF = () => {
    setMostrarPDF(true);
  };
  return (
    <div className='h-full w-full px-6'>
      <div className='grid grid-cols-1 gap-8'>
        <div className='col-span-1'>
          <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
            Visualizador de costos sanitarios
          </h1>

          {plans.map((plan, index) => (
            <div>
              <FormularioPlan formId={index} />
            </div>
          ))}
          <Button
            onClick={agregarFormulario}
            className="flex items-strech justify-between gap-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition hover:bg-sky-600 pl-2 cursor-pointer h-8"
          >
            <div className="flex items-center">Agregar Formulario</div>
            <span className="bg-sky-600 p-1 rounded flex items-center">
              <FaPlus className="text-white" />
            </span>
          </Button>
        </div>
        <div className='col-span-1 box-shadow rounded-[15px] shadow-md px-5'>
          {plans.length > 0 && (

            <div>
          
              <Graphic plans={plans} setChartImage={setChartImage}> </Graphic>
            </div>

          )}
        </div>
      </div>
      <Button
        onClick={generarPDF}
        className="flex items-strech justify-between gap-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition hover:bg-sky-600 pl-2 cursor-pointer h-8"
      >
        <div className="flex items-center">Generar PDF</div>
        <span className="bg-sky-600 p-1 rounded flex items-center">
          <FaArrowRight className="text-white" />
        </span>
      </Button>
      {mostrarPDF && (
        <div className='w-full h-[600px] mt-8'>
          <PDFViewer width="80%" height="100%">
            <PDFDocument chartImage={chartImage} />
          </PDFViewer>
        </div>
      )}
    </div>
  )
}

export default App;
