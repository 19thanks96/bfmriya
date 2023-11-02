export const VolunteersSection = ({src, alt, primary, secondary}) => {
    return(
        <div className="volunteers-section">
            <img src={src} alt={alt} className="volunteer-img"/>
            <div className="volunteers-job-title">{primary}</div>
            <div className="volunteers-name-title">{secondary}</div>
            
        </div>
    )
}