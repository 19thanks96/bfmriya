import { Typography } from "../Typography/Typography"


export const Title = ({primary, secondary}) => {
    return (
        <>
            <Typography variant='black-h2-span' Tag='h2'>
            {primary}&nbsp;
            </Typography>
            <Typography variant='blue-h2-span' Tag='h2'>
            {secondary}
            </Typography>
            <br/>
        </>
    )
}