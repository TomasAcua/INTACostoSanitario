import CostoSanitario from "./pages/CostoSanitario";
import {ROUTES } from "./const/routes";
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<CostoSanitario/>} path={ROUTES.costoSanitario}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
