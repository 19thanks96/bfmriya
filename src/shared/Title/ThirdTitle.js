import { Typography } from "../Typography/Typography";

export const ThirdTitle = ({primary, secondary}) => (
    <div className="wrapper-title">
            <Typography variant="wrapper-third-title-primary" Tag='h3'>
                {primary}
            </Typography>
            <Typography variant="wrapper-third-title-secondary" Tag='h3'>
                {secondary}
            </Typography>
        </div>
)