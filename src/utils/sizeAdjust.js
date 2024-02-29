export default function sizeAdjust() {
    const content = document.getElementById('content');
    const socials = document.getElementById('socials');

    if (screen.width < 400) {
        content.width = 300;
        socials.width = 300;
    }
}