import React from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = ({greeting}) => {
    return(
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Agregados ${n} productos al carrito`)}  />
        </div>
    );
};

export default ItemListContainer;