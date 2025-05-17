import { useEffect, useState } from 'react';
import Graphic from './components/Graphic/Graphic';
import Form from './components/Form/Form';
import Button from './components/Button/Button'
import Product from './components/Product/Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const storedProducts = localStorage.getItem('storedProducts')
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts))
      } catch (e) {
        console.error("Error al parsear localStorage", e)
        setProducts([])
      }
    }
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('storedProducts', JSON.stringify(products))
    } else {
      localStorage.removeItem('storedProducts')
    }
  }, [products])

  const addProductToTheList = (newProduct) => {
    setProducts(prev => [...prev, newProduct])
  }

  const deleteProductList = () => {
    setProducts([])
  }

  return (
    <div className='h-full w-full px-6'>
      <div className='grid grid-cols-2 gap-8'>
        <div className='col-span-1'>
          <Form onSubmit={addProductToTheList} ></Form>
          <div className='shadow-md w-full my-3 py-5'>
            {products.length > 0 ? (
              <div className='flex flex-col items-center gap-5'>
                {products.map((product, index) => {
                  console.log(product)
                  return (
                    <Product
                      object={product}
                      key={index}
                    />
                  )
                })}
              </div>
            ) : (
              <div>
                No hay productos
              </div>
            )}
          </div>
        </div>
        <div className='col-span-1 box-shadow rounded-[15px] shadow-md px-5'>
          <Graphic products={products}> </Graphic>
          <Button
            onClick={deleteProductList}
            className='border-2 p-2 px-5 rounded-[18px] hover:bg-black hover:text-white cursor-pointer'
          >Borrar Todo</Button>
        </div>
      </div>

    </div>
  )
}

export default App;
