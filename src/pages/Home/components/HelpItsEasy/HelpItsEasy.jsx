import './HelpItsEasy.scss'
import { TranslatedTextSectionOnPhoto } from './TranslatedTextSection/TranslatedTextSection'

export const HelpItsEasy = () => (
    <div className="wrapper-for-phototext">
        <div className='photo'>
            <TranslatedTextSectionOnPhoto 
            primary='Подайте руку тим,хто дійсно потребує допомоги' 
            secondary='GIVE A HAND TO THOSE WHO REALLY NEED HELP'/>
            <TranslatedTextSectionOnPhoto 
            primary='ДОПОМОГТИ УКРАЇНЦЯМ - ЦЕ ПРОСТО!' 
            secondary='HELPING UKRAINIANS IS EASY!'/>

        </div>
    </div>
)