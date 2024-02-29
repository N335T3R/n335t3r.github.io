import populateAbout from "./about";

export default function populateHome() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const live = document.createElement('h1');
    live.classList.add('live');
    live.textContent = "We're LIVE!";
    content.appendChild(live);

    const more = document.createElement('h4');
    more.classList.add('more');
    more.textContent = "and more is coming (including some blog content)!";
    content.appendChild(more);

    

    const vig = document.createElement('h4');
    vig.classList.add('vig');
    vig.textContent = "Click my face to see my party trick.";
    content.appendChild(vig);

    const vigInstruct = document.createElement('ul');
    vigInstruct.classList.add('vigInstruct');
    content.appendChild(vigInstruct);

    const vigDir1 = document.createElement('li');
    vigDir1.classList.add('vigDir');
    vigInstruct.appendChild(vigDir1);
    vigDir1.textContent = "Click again to generate a new cipher.";
    const vigDir2 = document.createElement('li');
    vigDir2.classList.add('vigDir');
    vigInstruct.appendChild(vigDir2);
    vigDir2.textContent = "Double-click to return things to normal.";
    const vigDir3 = document.createElement('li');
    vigDir3.classList.add('vigDir');
    vigInstruct.appendChild(vigDir3);
    vigDir3.textContent = "Click my face to learn more about the Vigenere cipher.";
}