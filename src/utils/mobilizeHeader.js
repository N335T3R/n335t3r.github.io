import { head } from "lodash";

export default function mobilizeHeader() {
    const header = document.getElementById('header');
    const mobileDef = document.getElementById('mobileDef');
    const aka = document.getElementById('aka');
    const neester = document.getElementById('neester');
    const anthony = document.getElementById('anthony');
    const def1 = document.getElementById('def1');
    const def2 = document.getElementById('def2');

    console.log(body);

    if (screen.width < 600) {
        header.removeChild(neester);
        header.removeChild(aka);
        header.appendChild(def2);
    }
}