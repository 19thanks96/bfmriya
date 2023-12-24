import { useTranslation } from 'react-i18next'
import './Footer.scss'
import svg from '../../imgs/labels/label.jpg'
import { Typography } from '../Typography/Typography'
import { LinkTo } from '../LinkTo/LinkTo'
import { ReactComponent as Tg } from '../../imgs/svg/telegram_icon_194153.svg'
import { ReactComponent as Inst } from '../../imgs/svg/instagram_black_logo_icon_147122.svg'


export const Footer = () => {
    const {t} = useTranslation()
    return (
        <section className='footer'>
            <img src={svg} alt='Logo charitable foundation bfmriya'/> 
            <Typography Tag='h4' variant='footer-slogan'>
                { t(`slogan`)}
            </Typography>
            <div className='grid-links'>
                <div>
                    <LinkTo href={`mailto:bfmriya.ua@gmail.com`}>bfmriya.ua@gmail.com</LinkTo>
                    <Tg className='mobile-hidden'/>
                </div>
                <div>
                    <LinkTo href={`tel:+380973393661`}>+380973393661</LinkTo>
                    <Inst className='mobile-hidden'/>
                </div>
            </div>
        </section>
    )
}