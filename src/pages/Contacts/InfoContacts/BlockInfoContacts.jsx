import { LinksTypography } from "../../../shared/Typography/LinksTypography"

export const BlockInfoContats = ({ src, alt, primary, secondary, type }) => {
    return (
      <section className="wrapper-contact">
        <img src={src} alt={alt} height='100px'/>
        <LinksTypography primary={primary} secondary={secondary} type={type}/> 
      </section>
    );
  };
  
