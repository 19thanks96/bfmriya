import './Benefit.scss'

export const Benefit = ({src, alt, upperText, lowerText}) => {
    return (
        <div className='benefit'>
            <img src={src} alt={alt}></img>
            <div className="upper-text">{upperText}</div>
            <div className="lower-text">{lowerText}</div>
        </div>
    )
}