import { Link } from 'react-router-dom';
import './Button.scss'

export const Button = ({children, href}) => {
    return(
        <a href={href}>
            <div className='button'>
                {children}
            </div>
        </a>
    )
}