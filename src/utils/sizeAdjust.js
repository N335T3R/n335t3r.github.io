export default function sizeAdjust() {
    const content = document.getElementById('content');

    if (screen.width < 400) {
        content.width = 300;
    }
}