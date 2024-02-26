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

    const checkAbout = document.createElement('div');
    checkAbout.classList.add('checkAbout');
    content.appendChild(checkAbout);

    const aboutLink = document.createElement('h3');
    aboutLink.classList.add('aboutLink');
    aboutLink.textContent = "Click HERE";
    aboutLink.onclick = () => {
        populateAbout();
    };
    checkAbout.appendChild(aboutLink);

    const aboutTag = document.createElement('h4');
    aboutTag.classList.add('aboutTag');
    aboutTag.textContent = "to learn more about your maitre d'!";
    checkAbout.appendChild(aboutTag);

    const vig = document.createElement('h3');
    vig.classList.add('vig');
    vig.textContent = "Hover over my face to see my party trick (then click to learn more).";
    content.appendChild(vig);
}