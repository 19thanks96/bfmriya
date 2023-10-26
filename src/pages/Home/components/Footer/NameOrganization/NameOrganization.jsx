import { LinkTo } from "../../../../../shared/LinkTo/LinkTo";
import { Typography } from "../../../../../shared/Typography/Typography";
import './NameOrganization.scss'
export const NameOrganization = () => (
    <>
        <Typography Tag='h4' variant='contacts'>
            Міжнародний благодійний фонд «МРІЯ UA» - прагнемо до здійненння мрії кожного українця.
        </Typography>
        
        <LinkTo href={`mailto:bfmriya.ua@gmail.com`}>bfmriya.ua@gmail.com</LinkTo>
        <LinkTo href={`tel:+380973393661`}>+380973393661</LinkTo>
    </>
)