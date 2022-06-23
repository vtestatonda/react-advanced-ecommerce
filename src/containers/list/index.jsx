import { lazy, Suspense, useContext } from "react";
import { CartContext } from "../../context/Cart";

const CardProduct = lazy(() => import("../../components/card"));
//el componente de cardproduct en vez de una importacion normal, se carga con una importaicon dinamica pero la misma sintaxis. se repeta el nombre del componente "cardproduct" por buena practica

export const ListContainer = () => {
  const { listProducts } = useContext(CartContext);
  return (
    // <> it`s a react fragment to wrap many lines of code
    <>
      <h1> hola estoy un listado de producto </h1>
      {listProducts.map((element, index) => {
        return (
          <Suspense fallback={<div>Cargando...</div>}>
            <CardProduct product={element} />
          </Suspense>
        );
      })}
    </>
  );
};
