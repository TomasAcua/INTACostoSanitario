import "./App.css";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Input from "./components/Input/Input";
import ListaDesplegable from "./components/ListaDesplegable/ListaDesplegable";

function App() {
  // const [numeroPulverizaciones, setNumeroPulverizaciones] = useState(()=> localStorage.getItem('numeroPulverizaciones') || '')
  const [unidadDosisProducto, setunidadDosisProducto] = useState(["Litros", "cc", "Kg"])
  const [unidadSeleccionada, setUnidadSeleccionada] = useState(
    () => localStorage.getItem("unidadSeleccionada") || ""
  );
  const [volumenProducto, setVolumenProducto] = useState(
    () => localStorage.getItem("volumenProducto") || ""
  );

  const [productoSeleccionado, setProductoSeleccionado] = useState(
    () => localStorage.getItem("productoSeleccionado") || ""
  );
  const [dosisProducto, setdosisProducto] = useState(
    () => localStorage.getItem("dosisProducto") || ""
  );
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const [cantidad, setCantidad] = useState(null);
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

  useEffect(() => {
    //localStorage.setItem('numeroPulverizaciones', numeroPulverizaciones)
    localStorage.setItem("productoSeleccionado", productoSeleccionado);
    localStorage.setItem("unidadSeleccionada", unidadSeleccionada);
    localStorage.setItem("dosisProducto", dosisProducto);
    localStorage.setItem("volumenProducto", volumenProducto);
    localStorage.setItem("productosSeleccionados", JSON.stringify(productosSeleccionados))
  }, [
    /*numeroPulverizaciones*/ productoSeleccionado,
    unidadSeleccionada,
    volumenProducto,
    productosSeleccionados 
  ]);
  useEffect(() => {
  const guardados = localStorage.getItem("productosSeleccionados");
  if (guardados) {
    setProductosSeleccionados(JSON.parse(guardados));
  }
}, []);
  const cantidadProducto = () => {
  const dosis = parseFloat(dosisProducto);
  const volumen = parseFloat(volumenProducto);
  if (!isNaN(dosis) && !isNaN(volumen)) {
    const resultado = dosis * volumen;
    setCantidad(resultado);

    const nuevoProducto = {
      producto: productoSeleccionado,
      dosis,
      volumen,
      unidad: unidadSeleccionada,
      cantidad: resultado,
    };

    setProductosSeleccionados((prev) => [...prev, nuevoProducto]);
  } else {
    setCantidad(0);
  }
  };
  return (
  <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-xl shadow-md w-full max-w-8xl mx-auto">
  <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
    Visualizador de costos sanitarios
  </h1>

  <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 w-full">
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
  onClick={cantidadProducto}
  className="flex items-strech justify-between gap-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition hover:bg-sky-600 pl-2 cursor-pointer h-8"
>
  <div className="flex items-center">  Calcular</div>

  <span className="bg-sky-600 p-1 rounded flex items-center">
    <FaArrowRight className="text-white" />
  </span>
</button>

    {cantidad !== null && (
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Cantidad: {cantidad} {unidadSeleccionada}/ha
      </p>
    )}
  </div>
</div>

  );
}

export default App;
