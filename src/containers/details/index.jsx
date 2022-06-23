import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cart";

export const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //con el id podemos filtrar el listado de nuestro producto. Toma el ": id" de App.jsx nos trae el parametro de la url.
  //const context = useContext(CartContext)
  //de la manera anterior estamos trayendo a todo el contexto
  const { listProducts } = useContext(CartContext);
  //de esta manera estamos trayendo solo el array de productos del contexto.

  useEffect(() => {
    let result = listProducts.filter((element) => element.id === Number(id));
    console.log(result);
    setProduct(result[0]);
  }, []);
  //con el useEffect lo estamos filtrando
  return (
    // <> it`s a react fragment to wrap many lines of code
    <>
      <h1>
        {product.name} - {id}
      </h1>
      <div>
        <strong>descripcion</strong>
        <p href="#">{product.price}</p>
        <button>comprar</button>
      </div>
    </>
  );
};
