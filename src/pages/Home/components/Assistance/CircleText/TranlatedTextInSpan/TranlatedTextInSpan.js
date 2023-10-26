import './TranlatedTextInSpan.scss'

export const TranlatedTextInSpan = ({primary, secondary}) => {
    return (
        <div className='TranlatedTextInSpan'>
            <span className="primary-text">{primary}</span>
            <span className="secondary-text">{secondary}</span>
        </div>
    )
}