import oferta from '../../shared/offerta.docx'

export const Footer = () => {
    return(
        <section className='footer-contacts'>
            <a href={oferta} target="_blank" className="underline" rel="noreferrer">Оферта</a>
        </section>
    )
}