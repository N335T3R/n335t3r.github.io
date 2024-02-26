export default function populateHome() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const live = document.createElement('h1');
    live.textContent = "We're LIVE!";
    content.appendChild(live);
}