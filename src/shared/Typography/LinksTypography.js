export const LinksTypography = ({primary, secondary, type}) => {
    if(type) {
        return(<>
            <div className="contact-section">
            {primary}
            </div>
            <a href={`${type + secondary}`}>
                <div className="underline-contacts">{secondary}</div></a>
            </>
        )
    }
    if(!type) {
        return(
            <>
                <div className="contact-section">{primary}</div>
                <div className="underline-contacts">{secondary}</div>
            </>
        )
    }
}