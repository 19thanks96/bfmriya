import { Typography } from "../Typography/Typography";
export const WordsAndLastComponent = ({ children }) => {
    // Розділити вхідний рядок на слова
    const words = children.split(/\s+/);

    // Знайти індекс останнього слова
    const lastWordIndex = words.length - 1;

    // Створити об'єкт результату
    const result = {
        lastWord: words[lastWordIndex],
        originalStringWithoutLastWord: words.slice(0, lastWordIndex).join(' ')
    };

    return (
        <>
            <Typography variant='black-h2-span' Tag='span'>
                 {result.originalStringWithoutLastWord}&nbsp;
            </Typography>
            <Typography variant='blue-h2-span' Tag='span'>
                {result.lastWord}
            </Typography>
        </>
    );
};