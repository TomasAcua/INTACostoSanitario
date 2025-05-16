import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Costo from './components/Costo/Costo'
import Dolar from './components/Dolar/Dolar'
import './App.css'

function App() {
  const productos = [
  {
    "producto": "Aceite de Verano",
    "unidad": "Litros",
    "dosis": 0.25,
    "volumen": 20,
    "cantidad": 5,
    "precioUnitario": 2400,
    "costoTotal": 12000
  },
  {
    "producto": "Abamectina",
    "unidad": "Litros",
    "dosis": 0.05,
    "volumen": 20,
    "cantidad": 1,
    "precioUnitario": 176500,
    "costoTotal": 176500
  },
  {
    "producto": "Polisulfuro de",
    "unidad": "Litros",
    "dosis": 3,
    "volumen": 20,
    "cantidad": 60,
    "precioUnitario": 1346,
    "costoTotal": 80760
  },
  {
    "producto": "trips",
    "unidad": "Litros",
    "dosis": 2.5,
    "volumen": 20,
    "cantidad": 50,
    "precioUnitario": 2640,
    "costoTotal": 132000
  },
  {
    "producto": "grafolita",
    "unidad": "cc",
    "dosis": 30,
    "volumen": 20,
    "cantidad": 600,
    "precioUnitario": 76,
    "costoTotal": 45600
  },
  {
    "producto": "carpocapsa",
    "unidad": "cc",
    "dosis": 70,
    "volumen": 25,
    "cantidad": 1750,
    "precioUnitario": 110,
    "costoTotal": 192500
  },
  {
    "producto": "grafolita",
    "unidad": "Litros",
    "dosis": 0.02,
    "volumen": 25,
    "cantidad": 0.5,
    "precioUnitario": 160500,
    "costoTotal": 80250
  },
  {
    "producto": "arañuela",
    "unidad": "Litros",
    "dosis": 0.02,
    "volumen": 25,
    "cantidad": 0.5,
    "precioUnitario": 296200,
    "costoTotal": 148100
  },
  {
    "producto": "Cyanantraniliprole",
    "unidad": "Litros",
    "dosis": 0.075,
    "volumen": 25,
    "cantidad": 1.875,
    "precioUnitario": 189000,
    "costoTotal": 354375
  },
  {
    "producto": "oidio",
    "unidad": "Kg",
    "dosis": 0.03,
    "volumen": 25,
    "cantidad": 1.5,
    "precioUnitario": 151700,
    "costoTotal": 227550
  },
  {
    "producto": "carpocapsa",
    "unidad": "Kg",
    "dosis": 0.015,
    "volumen": 25,
    "cantidad": 0.375,
    "precioUnitario": 346900,
    "costoTotal": 130088
  },
  {
    "producto": "Carbaryl",
    "unidad": "Kg",
    "dosis": 0.12,
    "volumen": 20,
    "cantidad": 2.4,
    "precioUnitario": 59500,
    "costoTotal": 142800
  },
  {
    "producto": "Dispersers 180",
    "unidad": "unidad",
    "dosis": null,
    "volumen": null,
    "cantidad": 1,
    "precioUnitario": 365,
    "costoTotal": 365
  },
  {
    "producto": "Trampas",
    "unidad": "unidad",
    "dosis": null,
    "volumen": null,
    "cantidad": 1,
    "precioUnitario": 32300,
    "costoTotal": 32300
  }
]
  const [refresh, setRefresh] = useState(0)

  return (
    <>
      <Dolar/>
       <button onClick={() => setRefresh(r => r + 1)}>Actualizar</button>
      <Costo key={refresh} productos={productos}/>
    </>
  )
}

export default App
