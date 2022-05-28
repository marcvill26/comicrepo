import { useContext, useEffect, useState } from "react";
import Context from "../context/StaticContext";
import { productosApi } from "../services";

import { useDispatch, useSelector } from "react-redux";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const { productContext, setProductContext } = useContext(Context);

  const productosRedux = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const { data } = await productosApi.get();
      setProductContext(data);
    };
    if (!productContext.length) {
      getData();
    } else {
      setProductos(productContext);
    }
  }, [productContext, setProductContext]);

  const getProductoById = (_id) => productos.find(({ id }) => id === _id);

  const addProduct = async (producto) => {
    try {
      const { data } = await productosApi.add(producto);
      setProductContext([...productos, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const buscar = (palabra) => {
    dispatch({ type: "@productos/buscar", payload: { productos, palabra } });
  };

  return {
    productos,
    getProductoById,
    addProduct,
    buscar,
    productosRedux,
  };
};

export default useProductos;
