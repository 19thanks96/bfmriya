import { Typography } from "../Typography/Typography"
import './Title.scss'


export const Title = ({primary, secondary}) => {
    return (
        <div className="wrapper-title">
            <Typography variant='black-h2-span' Tag='h2'>
            {primary}&nbsp;
            </Typography>
            <Typography variant='blue-h2-span' Tag='h2'>
            {secondary}
            </Typography>
            <br/>
        </div>
    )
}