import "./style.css";
import React, {useState} from "react";
import Plus from '../../assets/icons/plus.svg'
import Minus from '../../assets/icons/minus.svg'


function ItemCount({ stock, initial, onAdd}){
    let [count, setCount] = useState(initial || 1);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(Math.max(count - 1, 0));
    }

    if(count > stock){
        count = stock;
    }
    onAdd = () => {
        alert(`Quantidade selecionada: ${count}`)
    }

    return(
        <div>
            <div className="flex gap-4 justify-center mt-8 mb-4">
                <button onClick={decrement}>
                    <img
                        className="h-8 w-auto"
                        src={Minus}
                        alt=""
                    />
                </button>
                    <p>{count}</p>
                <button onClick={increment}>
                    <img
                        className="h-8 w-auto"
                        src={Plus}
                        alt=""
                    />
                </button>
            </div>
            <div>
                <button disabled={(count===0)} onClick={onAdd} className="text-base border-solid border-2 border-amber-600 text-amber-600 rounded-md py-2 px-4 hover:bg-amber-600 hover:text-white disabled:text-slate-500 disabled:cursor-not-allowed disabled:hover:bg-white disabled:border-slate-500">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}

export default ItemCount;