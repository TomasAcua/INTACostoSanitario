import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Input from "../Input/Input"
import ListaDesplegable from "../ListaDesplegable/ListaDesplegable";

const FormularioPlan =({formId}) =>{

     // const [numeroPulverizaciones, setNumeroPulverizaciones] = useState(()=> localStorage.getItem('numeroPulverizaciones') || '')

     //Estados para los input
  const [unidadDosisProducto, setunidadDosisProducto] = useState(["Litros", "cc", "Kg"])
  const [unidadSeleccionada, setUnidadSeleccionada] = useState('');
  const [volumenProducto, setVolumenProducto] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [dosisProducto, setdosisProducto] = useState('');
  const [cantidad, setCantidad] = useState(null);

// Estado para los mensajes
const [mensaje, setMensaje] = useState("");


  // Lista de productos agregados a este plan
const [productosSeleccionados, setProductosSeleccionados] = useState(() => {
  const data = localStorage.getItem("productosPorFormulario");
  const parsed = data ? JSON.parse(data) : {};
  return parsed[formId] || [];
});
  const [arrayProductos, setArrayProductos] = useState([
    {
      id: 1,
      producto: "Aceite de Verano",
      unidad: "Litros",
      dosis: 0.25,
      volumen: 20,
      cantidad: 5,
      precioUnitario: 2400,
      costoTotal: 12000,
    },
    {
      id: 2,
      producto: "Abamectina",
      unidad: "Litros",
      dosis: 0.05,
      volumen: 20,
      cantidad: 1,
      precioUnitario: 176500,
      costoTotal: 176500,
    },
    {
      id: 3,
      producto: "Polisulfuro de",
      unidad: "Litros",
      dosis: 3,
      volumen: 20,
      cantidad: 60,
      precioUnitario: 1346,
      costoTotal: 80760,
    },
    {
      id: 4,
      producto: "trips",
      unidad: "Litros",
      dosis: 2.5,
      volumen: 20,
      cantidad: 50,
      precioUnitario: 2640,
      costoTotal: 132000,
    },
    {
      id: 5,
      producto: "grafolita",
      unidad: "cc",
      dosis: 30,
      volumen: 20,
      cantidad: 600,
      precioUnitario: 76,
      costoTotal: 45600,
    },
    {
      id: 6,
      producto: "carpocapsa",
      unidad: "cc",
      dosis: 70,
      volumen: 25,
      cantidad: 1750,
      precioUnitario: 110,
      costoTotal: 192500,
    },
    {
      id: 7,
      producto: "grafolita",
      unidad: "Litros",
      dosis: 0.02,
      volumen: 25,
      cantidad: 0.5,
      precioUnitario: 160500,
      costoTotal: 80250,
    },
    {
      id: 8,
      producto: "arañuela",
      unidad: "Litros",
      dosis: 0.02,
      volumen: 25,
      cantidad: 0.5,
      precioUnitario: 296200,
      costoTotal: 148100,
    },
    {
      id: 9,
      producto: "Cyanantraniliprole",
      unidad: "Litros",
      dosis: 0.075,
      volumen: 25,
      cantidad: 1.875,
      precioUnitario: 189000,
      costoTotal: 354375,
    },
    {
      id: 10,
      producto: "oidio",
      unidad: "Kg",
      dosis: 0.03,
      volumen: 25,
      cantidad: 1.5,
      precioUnitario: 151700,
      costoTotal: 227550,
    },
    {
      id: 11,
      producto: "carpocapsa",
      unidad: "Kg",
      dosis: 0.015,
      volumen: 25,
      cantidad: 0.375,
      precioUnitario: 346900,
      costoTotal: 130088,
    },
    {
      id: 12,
      producto: "Carbaryl",
      unidad: "Kg",
      dosis: 0.12,
      volumen: 20,
      cantidad: 2.4,
      precioUnitario: 59500,
      costoTotal: 142800,
    },
    {
      id: 13,
      producto: "Dispersers 180",
      unidad: "unidad",
      dosis: null,
      volumen: null,
      cantidad: 1,
      precioUnitario: 365,
      costoTotal: 365,
    },
    {
      id: 14,
      producto: "Trampas",
      unidad: "unidad",
      dosis: null,
      volumen: null,
      cantidad: 1,
      precioUnitario: 32300,
      costoTotal: 32300,
    },
  ]);

// guardar el array de productos en el localStorage
useEffect(() => {
  const guardados = localStorage.getItem("productosPorFormulario");
  const productosPorFormulario = guardados ? JSON.parse(guardados) : {};
  productosPorFormulario[formId] = productosSeleccionados;
  localStorage.setItem("productosPorFormulario", JSON.stringify(productosPorFormulario));
}, [productosSeleccionados, formId]);


// Agregar productos al plan
  const agregarProducto = () => {
  const dosis = parseFloat(dosisProducto);
  const volumen = parseFloat(volumenProducto);
  if (!isNaN(dosis) && !isNaN(volumen) && productoSeleccionado && unidadSeleccionada) {
    const resultado = dosis * volumen;

    const nuevoProducto = {
      id: productosSeleccionados.length + 1,
      producto: productoSeleccionado,
      dosis,
      volumen,
      unidad: unidadSeleccionada,
      cantidad: resultado,
      id: formId,
    };
    

    setProductosSeleccionados((prev) => [...prev, nuevoProducto]);
    
    setMensaje("Producto agregado");

    setdosisProducto("");
    setVolumenProducto("");
    setProductoSeleccionado("");
    setUnidadSeleccionada("");
    setCantidad(null);
    setTimeout(() => setMensaje(""), 2000);
  } else {
    setMensaje("Por favor complete todos los campos correctamente");
    setTimeout(() => setMensaje(""), 2000);
  }
};
useEffect(() => {
  const total = productosSeleccionados.reduce((acc, p) => acc + p.cantidad, 0);
  setCantidad(total);
}, [productosSeleccionados]);

  return (
  <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-xl shadow-md w-full max-w-8xl mx-auto">
    <h2 className="text-center">Plan </h2>
  <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 w-full">
    <Input
      text={"Dosis"}
      type={"number"}
      value={dosisProducto}
      onChange={(e) => setdosisProducto(e.target.value)}
      placeholder={"Ingrese una dosis en números"}
    />
    <Input
      text={"Volumen (hl/ha)"}
      type={"number"}
      value={volumenProducto}
      onChange={(e) => setVolumenProducto(e.target.value)}
      placeholder={"Ingrese un volumen en hl/ha"}
    />
    <ListaDesplegable
      text={"Producto:"}
      name={"arrayProductos"}
      id={"arrayProductos"}
      array={arrayProductos}
      value={productoSeleccionado}
      onChange={(e) => setProductoSeleccionado(e.target.value)}
    />
    <ListaDesplegable
      text={"Unidad de dosis"}
      name={"unidadDosisProducto"}
      id={"unidadDosisProducto"}
      array={unidadDosisProducto}
      value={unidadSeleccionada}
      onChange={(e) => setUnidadSeleccionada(e.target.value)}
    />
  </div>

  <div className="mt-6 text-center flex flex-col items-center justify-center">
    <button
  onClick={agregarProducto}
  className="flex items-strech justify-between gap-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition hover:bg-sky-600 pl-2 cursor-pointer h-8"
>
  <div className="flex items-center">  Agregar</div>

  <span className="bg-sky-600 p-1 rounded flex items-center">
    <FaArrowRight className="text-white" />
  </span>
</button>
  {mensaje && (
    <p className="mt-4 text-green-600 font-semibold">{mensaje}</p>
  )}
  
  </div>
  <div>
    <h3 className="font-bold">
        Productos agregados al plan:
    </h3>
    <ul>
        {
            productosSeleccionados.map(p=>(
                <li key={p.id}>
                    {p.producto} - Cantidad : {p.cantidad} {p.unidad}
                </li>
            ))
        }
    </ul>
  </div>

    {cantidad !== null && (
      <p className="mt-4 text-lg font-semibold text-gray-700">
  Cantidad total: {cantidad} unidades/ha
</p>
    )}
</div>

  );

}
export default FormularioPlan