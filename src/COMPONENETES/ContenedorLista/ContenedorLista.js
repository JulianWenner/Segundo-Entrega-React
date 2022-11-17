/* import ItemP from "../ItemPeque.js/ItemP"

const ListaItems = (productos) => {
  return (
    <div>
        { productos.map((producto)=>(
            <ItemP key={producto.id} producto={producto}/>)
        )}
    </div>
  )
}

export default ListaItems */

import { useState } from "react";
import { useEffect } from "react";
import ListaItems from "./ContenedorLista";
import data from "../../data/data";

const ContenedorLista =()=> {
    const [productos, getProducto] = useState([])

    const traerPorductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        })
    })

    useEffect(() => {
        traerPorductos.then((respuesta) => {

            getProducto(respuesta)

        })
    },[])
    return (
        <div>
            <ListaItems prosuctos={productos} />
        </div>
    )
}

export default ContenedorLista