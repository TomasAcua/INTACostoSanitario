import { useEffect, useState } from "react";
import calcCost from "../../assets/functions/calcCost";
import fetchDolar from "../../services/fetchDolar";

const Cost = ({ products, setCostoTotal, refreshDolar }) => {
  let value = calcCost(products);
  const [dolar, setDolar] = useState(() => Number(localStorage.getItem("dolar")) || 0);
  const [total, setTotal] = useState(0);
  const [argValue, setArgValue] = useState(0);
  // const [refresh, setRefresh] = useState(0);

  //Actualiza el valor del dolar
  useEffect(() => {
    const localDolar = Number(localStorage.getItem("dolar")) || 0;
    setDolar(localDolar);
    console.log("dolarActualizado", localDolar);
    console.log("refreshDolar", refreshDolar);
  }, [refreshDolar]);

  //Obtiene el costo total de los productos
  useEffect(() => {
    const totalUSD = value.reduce((acc, item) => acc + item.total, 0);
    setTotal(totalUSD);
    setCostoTotal(totalUSD);
  }, [value, setCostoTotal]);

  //Obtiene el valor en pesos argentinos
  useEffect(() => {
    setArgValue(total * dolar);
    console.log("dolarEnPesos", dolar);
  }, [total, dolar]);

  return (
    <div className="bg-darkPrimary text-white py-2">

      <div>
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
        
      </div>
    </div>
  );
};

export default Cost;
