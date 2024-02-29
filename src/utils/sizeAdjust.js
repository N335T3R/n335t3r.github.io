export default function sizeAdjust() {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    const socials = document.getElementById('socials');

    if (screen.width < 400) {
        header.width = 300;
        content.width = 300;
        socials.width = 300;
    }
}