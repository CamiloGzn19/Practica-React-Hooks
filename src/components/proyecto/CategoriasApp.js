import React, { useEffect, useState } from "react";
import CategoriasList from "./CategoriasList";
import CategoriasAdd from "./CategoriasAdd";


export const CategoriasApp = () => {
  const [categorias, setCategorias] = useState([]);
  const [search, setSearch] = useState('');

  // const handleAgregar = () => {
  //   setCategorias([...categorias, "Risas"]);
  // };

  const imgGif = async () => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=YIpn66YWNPDFYRuSdDoZQMAEDOKSdR8q`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const imgData = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })
    return imgData;
  };

  useEffect(() => {
    imgGif().then(imgData => setCategorias(imgData))
  }, [search])

  return (
    <div>
      <h1>Componentes con Hooks</h1>
      <CategoriasAdd setSearch={setSearch} />
      <ol>
        <CategoriasList categorias={categorias} />
      </ol>
    </div>
  );
};
