import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../products.json";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const asyncMock = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(  setDetail(detail) );
        }, 2000);
      });
      
    return(
        <div>
            <ItemList items={detail} /> 
            {isLoading ? <span>CARGANDO...</span> : <Item items ={detail} />}
        </div>
    );
};

export default ItemDetailContainer;