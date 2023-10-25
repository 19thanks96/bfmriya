import { TranlatedTextInSpan } from '../TranlatedTextInSpan/TranlatedTextInSpan'
import '../Circle.scss'

export const AssistanceItem = ({number, primary, secondary}) => (
<span className='wrapper-element'>
        <span className="circle tint0">{number}</span>
            <TranlatedTextInSpan primary={primary} secondary={secondary}/>
        </span>
)