import { Typography } from "../Typography/Typography"

export const SecondTitle = ({primary, secondary}) => {
    return (
        <>
            <Typography variant="second-title primary" Tag='h3'>
                {primary}
            </Typography>
            <Typography variant="second-title secondary" Tag='h3'>
                {secondary}
            </Typography>
        </>
    )
}