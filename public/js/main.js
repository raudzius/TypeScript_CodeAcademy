"use strict";
console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const capitalizeAllLetters = (string) => console.log(string + ' -> ' + string.toUpperCase());
    capitalizeAllLetters('zalioji citrina');
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const countSymbols = (word1, word2) => word1.length + word2.length;
    console.log(countSymbols('baltas', 'lapas'));
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const checkIfHasLetter = (string, letter) => string.includes(letter);
    console.log(checkIfHasLetter('indas', 'k'));
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const checkIfEven = (string) => !(string.length % 2);
    console.log(checkIfEven('adidas'));
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const getNumOfVowels = (string) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        for (const letter of string.toLowerCase()) {
            vowels.includes(letter) && count++;
        }
        return count;
    };
    console.log(getNumOfVowels('information'));
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const countLetterOccurrences = (string, userLetter) => {
        let count = 0;
        for (const letter of string.toLowerCase()) {
            letter === userLetter && count++;
        }
        return count;
    };
    console.log(countLetterOccurrences('baravykai', 'a'));
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
    const removeFirstSymbol = (string) => string.slice(1);
    console.log(removeFirstSymbol('price'));
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
    const removeGivenLetters = (string, letterArray) => {
        string = [...string.toLocaleLowerCase()].filter(stringLetter => !letterArray.includes(stringLetter)).join('');
        return string;
    };
    console.log(removeGivenLetters('obuolysss', ['o', 's']));
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
    const fixText = (string) => {
        const sentencePunctuators = ['.', '!', '?'];
        sentencePunctuators.forEach(punctuator => {
            let sentenceArray = string.split(punctuator);
            if (sentenceArray[sentenceArray.length - 1] === '')
                sentenceArray.pop();
            sentenceArray = sentenceArray.map(sentence => sentence.trim()[0].toUpperCase() + sentence.trim().slice(1));
            string = sentenceArray.join(punctuator);
        });
        const punctuators = ['.', ',', '!', '?'];
        punctuators.forEach(punctuator => {
            let stringArray = string.split(punctuator);
            stringArray = stringArray.map(string => ' ' + string.trim());
            string = stringArray.join(punctuator);
        });
        string = string.split(' ').filter(occur => occur !== '').join(' ');
        string.trim();
        return string;
    };
    console.log(fixText('Lorem              I,    p,s,u?m is si.mply dummy te!xt of !the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
}
console.groupEnd();
//# sourceMappingURL=main.js.map