import calcCosto from "../../assets/functions/calcCosto"

const Costo = ({productos}) => {

    let value = calcCosto(productos)

 
    const total = value.reduce((acc, item) => acc + item.total, 0);
    const usdValue = total / 1137.50
    return (

        <div className="bg-darkPrimary text-white py-2">


            <h2 className="">Costo Total</h2>

            <div className="bg-slate-900 h-[0.2vh] w-full my-1"></div>

            <div className="">

                <div className="">
                    {
                        value.map((item, index) => {
                            return (

                                <div key={index} className="flex justify-between items-center py-2 px-4 border-b border-slate-700">
                                    <h3 className="text-slate-400">{item.nombre}</h3>
                                    <h3 className="text-slate-400">ARS ${Math.round(item.total).toLocaleString("es-AR", {maximumFractionDigits: 2 })}</h3>
                                </div>
                            )
                        })
                    }
                </div>

                <h3>ARS ${Math.round(total).toLocaleString("es-AR", {maximumFractionDigits: 2 })} / USD ${usdValue.toLocaleString("es-AR", {maximumFractionDigits: 2 })}</h3>

            </div>

        </div>

    )


}

export default Costo