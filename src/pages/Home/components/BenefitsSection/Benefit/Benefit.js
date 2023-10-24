import './Benefit.scss'

export const Benefit = ({src, alt, upperText, lowerText}) => {
    return <div>
        <img src={src} alt={alt}></img>
        <div className="benefit-upperText">{upperText}</div>
        <div className="benefit-lowerText">{lowerText}</div>

    </div>
}