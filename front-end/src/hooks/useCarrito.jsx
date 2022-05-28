import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  const carritoRedux = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  useEffect(() => {
    setCarrito(carritoRedux);
  }, [carritoRedux]);

  const add = (newCarrito) => {
    dispatch({ type: "@carrito/add", payload: newCarrito });
  };

  const remove = (id) => {
    dispatch({ type: "@carrito/remove", payload: id });
  };

  return {
    carrito,
    add,
    remove,
  };
};

export default useCarrito;
