import './Button.scss'

export const Button = ({children}) => {
    return(
        <button type='button'>
            {children}
        </button>
    )
}