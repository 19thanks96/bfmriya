import GoogleMap from "./GoogleMap";
import { InfoContacts } from "./InfoContacts/InfoContacts";
import './contacs.scss'


export const Contacts = () => (
    <section className="contacs">
        <InfoContacts/>
        <GoogleMap></GoogleMap>
    </section>
)