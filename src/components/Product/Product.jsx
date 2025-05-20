const Product = ({ object, onClickEdit }) => {
    return (
        <div className="grid grid-cols-7 gap-4 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
            <span>{object.producto}</span>
            <span>{object.dosis}</span>
            <span>{object.volumen}</span>
            <span>{object.unidad}</span>
            <span>{object.cantidad} {object.unidad}/ha</span>
            
            <span className="text-green-600 font-medium">${object.precioUnitario}</span>
             <span>
                    <button className='bg-sky-600 text-white px-2 rounded cursor-pointer' onClick={onClickEdit}>
                        Editar
                    </button>
                </span>
        </div>
    );
};

export default Product;
