import { Link as RouterLink} from "react-router-dom";
import './Link.scss'

export const Link = (props) => {

    return <RouterLink className="link" menuopen={props.menuOpen}  to={props.to}>{props.children}</RouterLink>
}


