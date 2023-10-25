import { Benefit } from "./Benefit/Benefit"
import information from './Benefit/imgs/information.png'
import trophy from './Benefit/imgs/trophy.png'
import handshake from './Benefit/imgs/handshake-heart.png'


export const BenefitsSection = () => {
    return (
        <div className="benefits-section">
            <Benefit src={information} 
            alt='information' 
            upperText='Відкритість'
            lowerText='До допомоги всім українцям.'/>

            <Benefit src={trophy}
            alt='trophy'
            upperText='Прозорість'
            lowerText='Прозоро та чесно, від щирого серця...'/>

            <Benefit src={handshake}
            alt='handshake-heart'
            upperText='Оперативність'
            lowerText='Швидкі наче вітер.'
            />
        </div>
    )
}