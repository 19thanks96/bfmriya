import { TextSection } from "./TextSection/TextSection"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { WordsAndLastComponent } from "../../../../shared/Title/WordsAndLastComponent";

export const WhoWeHelpSection = () => {
    const {t} = useTranslation();
    return (
        <section>
            <WordsAndLastComponent>{t("WHO WE")}</WordsAndLastComponent>
            <TextSection/>
        </section>
    )
}