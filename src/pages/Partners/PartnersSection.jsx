export const VolunteersSection = ({src, alt, primary, secondary}) => {
    return(
        <div className="partners-section">
            <img src={src} alt={alt} className="partners-img"/>
            <div className="partners-job-title">{primary}</div>
            <div className="partners-name-title">{secondary}</div>
            
        </div>
    )
}