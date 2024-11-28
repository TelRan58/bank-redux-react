import './App.css'
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import {useState} from "react";

function App() {
    const [balance, setBalance] = useState(0);

    const deposit = sum => {
        setBalance(prevBalance => prevBalance + sum);
    }

    const withDraw = sum => {
        setBalance(prevBalance => prevBalance < sum ? prevBalance : (prevBalance - sum));
    }

    return (
        <div>
            <Balance balance={balance}/>
            <Operation deposit={deposit} withDraw={withDraw}/>
        </div>
    )
}

export default App
