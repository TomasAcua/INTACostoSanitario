import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Input from "../Input/Input";
import ListaDesplegable from "../ListaDesplegable/ListaDesplegable";
import ProductsList from "../ProductsList/ProductsList";
import Cost from "../Cost/Cost";

const FormularioPlan = ({ formId }) => {
  const [form, setForm] = useState({
    unidad: "",
    volumen: "",
    precio: "",
    producto: "",
    dosis: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [cantidadTotal, setCantidadTotal] = useState(null);
  const [costoTotal, setCostoTotal] = useState(0);
  const unidades = ["Litros", "cc", "Kg"];
  const productosDisponibles = [
    { id: 1, producto: "Aceite de Verano", unidad: "Litros", dosis: 0.25, volumen: 20, cantidad: 5, precioUnitario: 2400, costoTotal: 12000 },
    { id: 2, producto: "Abamectina", unidad: "Litros", dosis: 0.05, volumen: 20, cantidad: 1, precioUnitario: 176500, costoTotal: 176500 },
    { id: 3, producto: "Polisulfuro de", unidad: "Litros", dosis: 3, volumen: 20, cantidad: 60, precioUnitario: 1346, costoTotal: 80760 },
    { id: 4, producto: "trips", unidad: "Litros", dosis: 2.5, volumen: 20, cantidad: 50, precioUnitario: 2640, costoTotal: 132000 },
    { id: 5, producto: "grafolita", unidad: "cc", dosis: 30, volumen: 20, cantidad: 600, precioUnitario: 76, costoTotal: 45600 },
    { id: 6, producto: "carpocapsa", unidad: "cc", dosis: 70, volumen: 25, cantidad: 1750, precioUnitario: 110, costoTotal: 192500 },
    { id: 7, producto: "grafolita", unidad: "Litros", dosis: 0.02, volumen: 25, cantidad: 0.5, precioUnitario: 160500, costoTotal: 80250 },
    { id: 8, producto: "arañuela", unidad: "Litros", dosis: 0.02, volumen: 25, cantidad: 0.5, precioUnitario: 296200, costoTotal: 148100 },
    { id: 9, producto: "Cyanantraniliprole", unidad: "Litros", dosis: 0.075, volumen: 25, cantidad: 1.875, precioUnitario: 189000, costoTotal: 354375 },
    { id: 10, producto: "oidio", unidad: "Kg", dosis: 0.03, volumen: 25, cantidad: 1.5, precioUnitario: 151700, costoTotal: 227550 },
    { id: 11, producto: "carpocapsa", unidad: "Kg", dosis: 0.015, volumen: 25, cantidad: 0.375, precioUnitario: 346900, costoTotal: 130088 },
    { id: 12, producto: "Carbaryl", unidad: "Kg", dosis: 0.12, volumen: 20, cantidad: 2.4, precioUnitario: 59500, costoTotal: 142800 },
    { id: 13, producto: "Dispersers 180", unidad: "unidad", dosis: null, volumen: null, cantidad: 1, precioUnitario: 365, costoTotal: 365 },
    { id: 14, producto: "Trampas", unidad: "unidad", dosis: null, volumen: null, cantidad: 1, precioUnitario: 32300, costoTotal: 32300 },
  ];

  const [productos, setProductos] = useState(() => {
    const data = JSON.parse(localStorage.getItem("productosPorFormulario") || "{}");
    
    return data[formId]?.['productos'] || [];
  });

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("productosPorFormulario") || "{}");
    guardados[formId] = {name: `Plan ${formId + 1}`, productos, costoTotal};
    localStorage.setItem("productosPorFormulario", JSON.stringify(guardados));
  }, [productos, formId, costoTotal]);

  useEffect(() => {
    const total = productos.reduce((acc, p) => acc + (parseFloat(p.cantidad) || 0), 0);
    setCantidadTotal(total);
  }, [productos]);

  const actualizarForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const agregarProducto = () => {
    const { producto, unidad, dosis, volumen, precio } = form;
    const dosisNum = parseFloat(dosis);
    const volumenNum = parseFloat(volumen);
    const precioNum = parseFloat(precio);

    if (!producto || !unidad || isNaN(dosisNum) || isNaN(volumenNum) || isNaN(precioNum)) {
      mostrarMensaje("Por favor complete todos los campos correctamente");
      return;
    }

    const cantidad = dosisNum * volumenNum;

    const nuevo = {
      id: productos.length + 1,
      producto,
      unidad,
      dosis: dosisNum,
      volumen: volumenNum,
      cantidad,
      precioUnitario: precioNum,
    };

    setProductos((prev) => [...prev, nuevo]);
    setForm({ unidad: "", volumen: "", precio: "", producto: "", dosis: "" });
    mostrarMensaje("Producto agregado");
  };

  const mostrarMensaje = (msg) => {
    setMensaje(msg);
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-xl shadow-md w-full max-w-8xl mx-auto">
      <h2 className="text-center">Plan</h2>

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 w-full">
        <Input text="Dosis" type="number" value={form.dosis} onChange={(e) => actualizarForm("dosis", e.target.value)} placeholder="Ingrese una dosis en números" />
        <Input text="Volumen (hl/ha)" type="number" value={form.volumen} onChange={(e) => actualizarForm("volumen", e.target.value)} placeholder="Ingrese un volumen" />
        <Input text="Precio" type="number" value={form.precio} onChange={(e) => actualizarForm("precio", e.target.value)} placeholder="Ingrese un precio" />
        <ListaDesplegable text="Producto:" name="producto" id="producto" array={productosDisponibles} value={form.producto} onChange={(e) => actualizarForm("producto", e.target.value)} />
        <ListaDesplegable text="Unidad de dosis" name="unidad" id="unidad" array={unidades} value={form.unidad} onChange={(e) => actualizarForm("unidad", e.target.value)} />
      </div>

      <div className="mt-6 text-center flex flex-col items-center justify-center">
        <button
          onClick={agregarProducto}
          className="flex items-center gap-x-2 bg-gray-800 text-white rounded-lg hover:bg-sky-600 pl-2 cursor-pointer h-8"
        >
          <span>Agregar</span>
          <span className="bg-sky-600 p-1 rounded">
            <FaArrowRight className="text-white" />
          </span>
        </button>
        {mensaje && <p className="mt-4 text-green-600 font-semibold">{mensaje}</p>}
      </div>

      <div>
        <h3 className="font-bold">Productos agregados al plan:</h3>
        <ProductsList products={productos} />
        <Cost products={productos} setCostoTotal={setCostoTotal}/>
      </div>

      {cantidadTotal !== null && (
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Cantidad total: {cantidadTotal} unidades/ha
        </p>
      )}
    </div>
  );
};

export default FormularioPlan;
