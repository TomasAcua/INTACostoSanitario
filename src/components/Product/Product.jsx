import Button from "../Button/Button";

const Product = ({ object, onClickEdit, onEliminar }) => {
    return (
        <div className="grid grid-cols-8 items-center gap-4 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors border-b">
            <span>{object.producto}</span>
            <span>{object.dosis}</span>
            <span>{object.volumen}</span>
            <span>{object.unidad}</span>
            <span>{(object.cantidad).toFixed(2)} {object.unidad}/ha</span>
            <span className="text-green-600 font-medium">${object.precioUnitario.toFixed(2)}</span>
            <span className="text-green-600 font-medium">${(object.cantidad * object.precioUnitario).toFixed(2)}</span>
            <div className="flex gap-2">
                <Button
                    className="bg-sky-600 hover:bg-sky-700 text-white px-2 py-1 rounded text-xs cursor-pointer"
                    onClick={onClickEdit}
                >
                    Editar
                </Button>
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs cursor-pointer"
                    onClick={onEliminar}
                >
                    Eliminar
                </Button>
            </div>
        </div>
    );
};

export default Product;
