import { useEffect, useState } from "react";
import calcCost from "../../assets/functions/calcCost";
import fetchDolar from "../../services/fetchDolar";

const Cost = ({ products, setCostoTotal }) => {
  let value = calcCost(products);
  const dolar = localStorage.getItem("dolar");
  const [total, setTotal] = useState(0);
  const [argValue, setArgValue] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchDolarValue = async () => {
      const dolarValue = await fetchDolar();
      localStorage.setItem("dolar", dolarValue.venta);
    };

    if (!dolar) {
      fetchDolarValue();
    }
  },[])

  useEffect(() => {
    const totalUSD = value.reduce((acc, item) => acc + item.total, 0)
    setTotal(totalUSD);
    setArgValue(total * dolar);
    setCostoTotal(totalUSD);
  }, [dolar, value, refresh]);

  return (
    <div className="bg-darkPrimary text-white py-2">
      <h2 className="">Costo Total</h2>
      <div className="bg-slate-900 h-[0.2vh] w-full my-1"></div>

    {/* Esto es de prueba, eliminar luego */}
      <div className="">
        {/* {total ? (
          <div className="">
            {value.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 px-4 border-b border-slate-700"
                >
                  <h3 className="text-slate-400">{item.nombre}</h3>
                  <h3 className="text-slate-400">
                    USD $
                    {Math.round(item.total).toLocaleString("es-AR", {
                      maximumFractionDigits: 2,
                    })}
                  </h3>
                </div>
              );
            })}
          </div>
        ) : (
          <h3 className="text-slate-400">Cargando...</h3>
        )} */}

        {argValue ? (
          <h3 className="text-slate-900">
            USD $
            {Math.round(total).toLocaleString("es-AR", {
              maximumFractionDigits: 2,
            })}{" "}
            / ARS $
            {argValue.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
          </h3>
        ) : (
          <h3 className="text-slate-400">Cargando...</h3>
        )}
        
        <button 
        className="bg-blue-500 hover:bg-blue-900 hover:curso-pointer" 
        onClick={() => setRefresh((r) => r + 1)}>Actualizar</button>
      </div>
    </div>
  );
};

export default Cost;
