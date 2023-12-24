import './Button.scss'

export const ButtonToAnotherSite = ({children, href}) => {
    return(
        <a href={href}>
            <div className='button'>
                {children}
            </div>
        </a>
    )
}