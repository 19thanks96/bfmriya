import { FullSizeImg } from "../../../../shared/FullSizeImg/FullSizeImg";
import { ThirdTitle } from "../../../../shared/Title/ThirdTitle";
import { TranslatedTextSection } from "./TranslatedTextSection/TranslatedTextSection";
import foto from '../../../../imgs/mriaText-300x300.jpg'
import { Button } from "../../../../shared/Button/Button";
import { PhotoDesk } from "./PhotoDesk/PhotoDesk";

export const CharitableResult = () => (
    <>
        <ThirdTitle 
        primary='РЕЗУЛЬТАТ ДІЯЛЬНОСТІ НАШОГО БЛАГОДІЙНОГО ФОНДУ' 
        secondary={`THE RESULT OF OUR CHARITABLE FOUNDATION'S ACTIVITIES`}>
        </ThirdTitle>
        <TranslatedTextSection/>
        <FullSizeImg src={foto} alt='slogan of Ukraine volunteers'/>
        <Button>Більше фото</Button>
        <PhotoDesk></PhotoDesk>
    </>
)