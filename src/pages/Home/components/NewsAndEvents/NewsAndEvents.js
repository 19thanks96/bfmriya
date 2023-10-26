import { Button } from "../../../../shared/Button/Button"
import { Title } from "../../../../shared/Title/Title"
import { MyGallery } from "./MyGallery"

export const NewsAndEvents = () => {
    return (
        <>
        <Title primary='Наші новини та' secondary='події'/>
        <MyGallery/>
        <Button>Докладніше</Button>
        </>
    )
}