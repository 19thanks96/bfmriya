import './TranlatedTextInSpan.scss'

export const TranlatedTextInSpan = ({primary, secondary}) => {
    return (
        <>
            <span className="primary-text">{primary}</span>
            <span className="secondary-text">{secondary}</span>
        </>
    )
}