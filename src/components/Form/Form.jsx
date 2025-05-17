import { useState } from 'react';

const Form = ({ onSubmit, index }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProduct || !cost) return;

    onSubmit({
      name: selectedProduct,
      cost: parseFloat(cost)
    });

    setSelectedProduct('');
    setCost('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md flex flex-col space-y-3"
    >
      <h3 className="text-lg font-semibold text-gray-700"> Producto #{index}</h3>

      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
          Producto
        </label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-full bg-gray-200 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          name="productName"
          id="productName"
        >
          <option value="">Seleccionar producto</option>
          <option value="Product 1">Producto 1</option>
          <option value="Product 2">Producto 2</option>
          <option value="Product 3">Producto 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="productCost" className="block text-sm font-medium text-gray-700 mb-1">
          Costo
        </label>
        <input
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="number"
          name="productCost"
          id="productCost"
          placeholder="$"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
      >
        Guardar producto
      </button>
    </form>
  );
};

export default Form;
