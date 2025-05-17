import { useEffect } from "react";
import calcCosto from "../../assets/functions/calcCosto";

const AgregarPlan = () => {

    // const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];

    const getProductosSeleccionados = () => {
        const productos = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
        return productos;
    }

    return (
        <div className="">
            <button className="mt-6 flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition cursor-pointer" 
            onClick={() => console.log(getProductosSeleccionados())}>
                Agregar Plan
            </button>
        </div>
    )
}

export default AgregarPlan;