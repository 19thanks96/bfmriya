import { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const SetPayPal = () => {
    const [{ options }, dispatch] = usePayPalScriptReducer();
    const [money, setMoney] = useState(1)
    const [currency, setCurrency] = useState('USD')
    const style = {
        layout: "vertical",
        disableMaxWidth: true
    }
    function handleMoneyChange({ target: { value } }) {
        setMoney(value)
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
            },
        });
    }

    function onCurrencyChange({ target: { value } }) {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }
    function createOrder (data, actions) {
        // Calculate the order amount based on the value state
        const amount = money;
        // Create the PayPal order
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount, // Set the order amount
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        
        console.log("Payment approved:", data);
    };



    return (
        <>
        <div className="donation-inputs">
            <input placeholder="0.00" type="text" inputMode="decimal" role="input" onChange={handleMoneyChange}></input>
            <select value={currency} onChange={onCurrencyChange}>
                <option value="USD">United States dollar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">GBP</option>
                <option value="PLN">PLN</option>
            </select>
        </div>
        <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    style={style}
                    className='my-paypal-buttons'
                />
        </>
    )
}