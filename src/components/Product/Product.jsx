import Button from "../Button/Button";
import { SquarePen, Trash } from "lucide-react";
const Product = ({ object, onClickEdit, onEliminar }) => {
    return (
        <div className="grid grid-cols-6 gap-4 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
            <span>{object.producto}</span>
            <span>{object.dosis}</span>
            <span>{object.volumen}</span>
            <span>{object.unidad}</span>
            <span>{object.cantidad} {object.unidad}/ha</span>
            <span className="text-green-600 font-medium">
                ${(object.precioUnitario * object.cantidad)}
            </span>
            <div className="flex flex-col gap-2">
                <Button
                    className="bg-sky-600 text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                    onClick={onClickEdit}
                >
                    <SquarePen size={16} />
                    Editar
                </Button>
                <Button
                    className="bg-red-600 text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                    onClick={onEliminar}
                >
                    <Trash size={16} />
                    Eliminar
                </Button>
            </div>
        </div>
    );
};

export default Product;
