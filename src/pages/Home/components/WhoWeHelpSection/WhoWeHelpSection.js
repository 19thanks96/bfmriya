import { Button } from "../../../../shared/Button/Button"
import { Title } from "../../../../shared/Title/Title"
import { TextSection } from "./TextSection/TextSection"
import React from 'react';
import { useTranslation } from 'react-i18next';

export const WhoWeHelpSection = () => {
    const {t} = useTranslation();
    return (
        <section>
            <Title primary={t("WHO WE")}  
            secondary={t("HELP")}/>
            <TextSection/>
            <Button>Докладніше</Button>
        </section>
    )
}