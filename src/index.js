import "./styles.css";
import makeTable from "./utils/headerUtils";
import { encode } from "./utils/headerUtils";


const nametag = document.getElementById('nametag');
nametag.textContent = "n335t3r";

const test = document.getElementById('test');


nametag.onmouseenter = () => {
    nametag.textContent = "";
    var text = encode("neester");
    nametag.textContent = text;
};
nametag.onmouseleave = () => {
    nametag.textContent = "n335t3r";
};