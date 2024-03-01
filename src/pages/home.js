import UnorderedList from "../utils/unorderedList";

export default function populateHome() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const live = document.createElement('h1');
    live.classList.add('live');
    live.textContent = "We're LIVE!";
    content.appendChild(live);

    const more = document.createElement('h4');
    more.classList.add('more');
    more.textContent = "and more is coming!";
    content.appendChild(more);

    

    const vig = document.createElement('h4');
    vig.classList.add('vig');
    vig.textContent = "Click my name to see my party trick.";
    content.appendChild(vig);


    const vigDir1 = "Click again to generate a new cipher.";
    const vigDir2 = "Double-click to return things to normal.";
    const vigDir3 = "Click my face to learn more about the Vigenere cipher.";

    const vigInstruct = new UnorderedList(vigDir1, vigDir2, vigDir3);
    vigInstruct.classList.add('vigInstruct');
    content.appendChild(vigInstruct);
}