export default function populateBlog() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const crickets = document.createElement('h4');
    crickets.classList.add('crickets');
    crickets.textContent = "the crickets go";
    content.appendChild(crickets);

    const chirp = document.createElement('h2');
    chirp.classList.add('chirp');
    chirp.textContent = "chirp chirp chirp";
    content.appendChild(chirp);
}