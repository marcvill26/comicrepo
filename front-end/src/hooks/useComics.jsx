import { useContex, useEffect, useState } from "react";
import Context from "../context/StaticContext";
import { comicsApi } from "../services";

import { useDispatch, useSelector } from "react-redux";

const useComics = () => {
  const [comic, setcomic] = useState([]);
  const { comicContext, setcomicContext } = useContex(Context);

  const comicsRedux = useSelector((state) => state.comics);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const { data } = await comicsApi.get();
      setcomicContext(data);
    };
    if (!comicContext.length) {
      getData();
    } else {
      setcomic(comicContext);
    }
  }, [comicContext, setcomicContext]);

  const getComicById = (_id) => comic.find(({ id }) => id === _id);

  const addComic = async (comic) => {
    try {
      const { data } = await comicsApi.add(comic);
      setcomicContext([...comic, data]);
    } catch (error) {
      console.error(error);
    }
  };
  const buscar = (palabra) => {
    dispatch({ type: "@comics/buscar", payload: { comic, palabra } });
  };
  return {
    comic,
    getComicById,
    addComic,
    buscar,
    comicsRedux,
  };
};
export default useComics;
