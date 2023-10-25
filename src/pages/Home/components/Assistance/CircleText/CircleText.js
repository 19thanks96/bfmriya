import './Circle.scss'
import { TranlatedTextInSpan } from './TranlatedTextInSpan/TranlatedTextInSpan'

export const CircleText = () => {
    return (
        <>
        <span className='wrapper-element'>
            <span className="circle tint0">1</span>
            <TranlatedTextInSpan primary='ПРОДУКТИ ХАРЧУВАННЯ' secondary='FOOD'/>
        </span>
        <span className='wrapper-element'>
            <span className="circle tint10">2</span>
            <TranlatedTextInSpan primary='ЗАСОБИ ГІГІЄНИ' secondary='HYGIENE PRODUCTS'/>
            
        </span>
        <span className='wrapper-element'>
            <span className="circle tint20">3</span>
            <TranlatedTextInSpan primary='ЛІКИ' secondary='MEDICINE'/>
        </span>
        <span className='wrapper-element'>
            <span className="circle tint30">4</span>
            <TranlatedTextInSpan primary='ОДЯГ' secondary='CLOTHES'/>

        </span>
        <span className='wrapper-element'>
            <span className="circle tint40">5</span>
            <TranlatedTextInSpan primary='ТОВАРИ ВІЙСЬКОВОГО ПРИЗНАЧЕННЯ' secondary='MILITARY GOODS'/>

        </span>
        <span className='wrapper-element'>
            <span className="circle tint50">6</span>
            <TranlatedTextInSpan primary='ПСИХОЛОГІЧНА ДОПОМОГА' secondary='PSYHOLOGICAL ASSISTANCE'/>

        </span>

            
        </>
    )
}