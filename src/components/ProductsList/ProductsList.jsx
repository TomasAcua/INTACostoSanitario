import Product from '../Product/Product';

const ProductsList = ({ products }) => {
    
    return (
        <section className="w-full mx-auto mt-4 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="grid grid-cols-6 gap-4 font-semibold text-sm text-gray-700 bg-gray-100 px-4 py-3 border-b">
                <span>Nombre</span>
                <span>Dosis</span>
                <span>Volumen</span>
                <span>Unidad</span>
                <span>Cantidad</span>
                <span>Costo</span>
            </div>
            <div className="divide-y">
                {products.map((prod, idx) => (
                    <Product key={idx} object={prod} />
                ))}
            </div>
        </section>
    );
};

export default ProductsList;
