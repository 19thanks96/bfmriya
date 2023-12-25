import { TranlatedTextInSpan } from '../TranlatedTextInSpan/TranlatedTextInSpan'
import '../Circle.scss'

export const AssistanceItem = ({number, text}) => (
    <span className='wrapper-element'>
        <span className={'circle tint' + ((number-1)*10)}>{number}</span>
            <TranlatedTextInSpan  text={text}/>
        </span>
)