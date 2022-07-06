import {useState} from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const incrementar = () => {
        setCount(count + 1);
    };
    const decrementar = () => {
        if(count > 0) {
        setCount(count - 1);
       };
    };
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={() =>{
                if(count <= stock ){
                    onAdd(count);
                }
                else{
                    alert("No hay suficiente stock")
                }
            }}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;