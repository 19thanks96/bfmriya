import { Link } from 'react-router-dom';
import './Button.scss'

export const Button = ({children, href}) => {
    return(
        <Link to={href}>
            <div className='button'>
                {children}
            </div>
        </Link>
    )
}