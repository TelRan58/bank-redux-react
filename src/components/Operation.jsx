import {useState} from "react";
import {store} from "../configureStore/store.js";
import {deposit, withdraw} from "../actions/accountActtions.js";

const Operation = () => {
    const [sum, setSum] = useState(1);

    return (
        <div>
            <button onClick={() => store.dispatch(withdraw(sum))}>Withdraw</button>
            <input
                type={'number'}
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;