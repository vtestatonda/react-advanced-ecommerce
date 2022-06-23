import "./App.css";
import { ListContainer } from "./containers/list";
import { DetailContainer } from "./containers/details";
import { HomeContainer } from "./containers/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/Cart";
//la nueva actualizacion de react-router-dom no usa switch, usa routes. cambia un poco la sintaxis tambien
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route exact path="/home" element={<HomeContainer />} />
          <Route exact path="/list" element={<ListContainer />} />
          <Route path="/product/:id" element={<DetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    //CartProvider (context) tiene que englobar todo para que se puedan usar los parametros
  );
};

export default App;
