
import { useState } from "react";
import "./donation.scss";
import { PayPal } from "./PayPal";

export const Donation = () => {
    const [getNewData, setNewData] = useState(false)
    const [value, setValue] = useState(0)
    const [currency, setCurrency] = useState("USD");
    function handleInputChange(e) {
        setNewData(true)
        const newValue = Number(parseFloat(e.target.value))
        setValue(newValue);
    }

    function retry() {
        setNewData(false)
    }
    function handleCurrencyChange(e) {
        setCurrency(e.target.value);
        retry()
      }
    return (
        <section className='wrapper-page donation-page'>
                <PayPal />
        </section>
    )
}