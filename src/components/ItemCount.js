import {useState} from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const incrementar = () => {
        if(count < stock) {
        setCount(count + 1);
        }
        else{
            alert("No hay sufciente stock")
        };
    };
    const decrementar = () => {
        if(count > 1) {
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