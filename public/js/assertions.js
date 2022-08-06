"use strict";
console.group('Assertions - užduotys');
{
    const button = document.querySelector('#assertions button');
    const squareContainerDiv = document.querySelector('#assertions div');
    const squareCounterParagraph = document.querySelector('#assertions p');
    console.log(`
      const button: HTMLButtonElement = document.querySelector('#assertions button') as HTMLButtonElement;
      const squareContainerDiv: HTMLDivElement = document.querySelector('#assertions div') as HTMLDivElement;
      const squareCounterParagraph: HTMLParagraphElement = document.querySelector('#assertions p') as HTMLParagraphElement;`);
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        button.addEventListener('click', () => {
            console.log('paspausta!');
        });
        console.log(`
    button.addEventListener('click', () => {
      console.log('paspausta!');
    });`);
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        button.addEventListener('click', () => {
            const squareDiv = document.createElement('div');
            squareDiv.style.cssText = `
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 1px solid black;
      `;
            squareContainerDiv.append(squareDiv);
        });
        console.log(`button.addEventListener('click', () => {
    const squareDiv: HTMLDivElement = document.createElement('div');
    squareDiv.style.cssText = \`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 1px solid black;
    \`;
    squareContainerDiv.append(squareDiv);
    });`);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        button.addEventListener('click', () => {
            squareCounterParagraph.textContent = squareContainerDiv.children.length.toString();
        });
        console.log(`
    button.addEventListener('click', () => {
      squareCounterParagraph.textContent = squareContainerDiv.children.length.toString();
    });`);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map