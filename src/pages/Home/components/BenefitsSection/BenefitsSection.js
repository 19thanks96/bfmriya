import { Benefit } from "./Benefit/Benefit"
import informationImg from './Benefit/imgs/information.png'
import trophyImg from './Benefit/imgs/trophy.png'
import handshakeImg from './Benefit/imgs/handshake-heart.png'


export const BenefitsSection = () => {
    return (
        <section className="benefits-section">
            <Benefit src={informationImg} 
            alt='information' 
            upperText='Відкритість'
            lowerText='До допомоги всім українцям.'
            />

            <Benefit src={trophyImg}
            alt='trophy'
            upperText='Прозорість'
            lowerText='Прозоро та чесно, від щирого серця...'
            />

            <Benefit src={handshakeImg}
            alt='handshake-heart'
            upperText='Оперативність'
            lowerText='Швидкі наче вітер.'
            />
        </section>
    )
}