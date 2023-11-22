import { Link } from 'react-router-dom';
import './Button.scss'

export const Button = ({children, href}) => {
    return(
        <Link to={href}>
            <button type='button' className='button'>
                {children}
            </button>
        </Link>
    )
}