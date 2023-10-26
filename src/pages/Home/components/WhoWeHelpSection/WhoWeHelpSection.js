import { Button } from "../../../../shared/Button/Button"
import { Title } from "../../../../shared/Title/Title"
import { TextSection } from "./TextSection/TextSection"


export const WhoWeHelpSection = () => {
    return (
        <section>
            <Title primary='Кому ми надаємо' 
            secondary='допомогу?
            WHO WE HELP?'/>
            <TextSection/>
            <Button>Докладніше</Button>
        </section>
    )
}