import { Typography } from "../Typography/Typography"
import './Title.scss'

export const SecondTitle = ({primary, secondary}) => {
    return (
        <div className="wrapper-title">
            <Typography variant="second-title primary" Tag='h3'>
                {primary}
            </Typography>
            <Typography variant="second-title secondary" Tag='h3'>
                {secondary}
            </Typography>
        </div>
    )
}