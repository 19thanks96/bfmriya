
import { useState } from "react";
import "./donation.scss";
import { PayPal } from "./PayPal";

export const Donation = ({menuOpen}) => {
    const [getNewData, setNewData] = useState(false)
    const [value, setValue] = useState(0)
    const [currency, setCurrency] = useState("USD");
    function handleInputChange(e) {
        setNewData(true)
        const newValue = Number(parseFloat(e.target.value))
        setValue(newValue);
        console.log("Updated value:", newValue);
        console.log(currency)

    }

    function retry() {
        setNewData(false)
    }
    function handleCurrencyChange(e) {
        setCurrency(e.target.value);
        console.log("Updated currency:", e.target.value);
        retry()

      }
    return (
        <section className='wrapper-page donation-page'>
            {/* <div>how many cost you send for us</div>
            <input placeholder="0.00" type="text" inputMode="decimal" role="input" onInput={handleInputChange}></input>
            <select onChange={handleCurrencyChange} role='currency' value={currency}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="PLN">PLN</option>
            </select>
             */}
                <PayPal menuOpen={menuOpen}/>
                
            
            
        </section>
    )
}