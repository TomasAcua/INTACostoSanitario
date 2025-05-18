const Product = ({ object }) => {
    return (
        <div className="grid grid-cols-6 gap-4 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
            <span>{object.producto}</span>
            <span>{object.dosis}</span>
            <span>{object.volumen}</span>
            <span>{object.unidad}</span>
            <span>{object.cantidad}</span>
            <span className="text-green-600 font-medium">${object.precioUnitario}</span>
        </div>
    );
};

export default Product;
