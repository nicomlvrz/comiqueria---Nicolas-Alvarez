import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../products.json";
import Item from "./Item";

const ItemListContainer = ({greeting}) => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const asyncMock = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(  setList(products) );
        }, 2000);
      });

    return(
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Agregados ${n} productos al carrito`)}  />
            <ItemList items={list} /> 
            {isLoading ? <span>CARGANDO...</span> : <Item items ={products} />}
        </div>
    );
};

export default ItemListContainer;