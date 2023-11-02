import GoogleMap from "./GoogleMap";
import { InfoContacts } from "./InfoContacts/InfoContacts";
import './contacs.scss'
import { Footer } from "./Footer";


export const Contacts = () => (
    <section >
        <div className="contacs wrapper-page">
        <InfoContacts/>
        <GoogleMap></GoogleMap>
        </div>
        <Footer />
    </section>
)