import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { SetPayPal } from "./SetPayPal";
export const PayPal = ({menuOpen}) => {
    const initialOptions = {
        clientId: process.env.CLIENT_ID || 'test',
        // intent: "capture",
    };
    
    return(
        <PayPalScriptProvider options={initialOptions} clasName={menuOpen ? 'hidden' : ''}>
            <SetPayPal/>
        </PayPalScriptProvider>
    )
}