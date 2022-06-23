import { Link } from "react-router-dom";

export const HomeContainer = () => {
  //this.a();
  //error para utilizar la funcion de error, la app me tira una pantalla en blanco y queremos que diga algo para avisar.
  return (
    // <> it`s a react fragment to wrap many lines of code
    <>
      <h1> hola estoy en la home </h1>
      <Link to={"/list"}>listado de productos</Link>
    </>
  );
};
