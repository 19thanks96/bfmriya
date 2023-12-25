import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import { SetPayPal } from "./SetPayPal";


export const PayPal = () => {
    const initialOptions = {
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_API_KEY,
        intent: "capture",
    };
    
    return(
        <PayPalScriptProvider options={initialOptions}>
            <SetPayPal/>
        </PayPalScriptProvider>
    )
}