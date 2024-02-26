import "./styles.css";
import Profile from "./assets/n335t3rProfile.png";
import makeTable from "./utils/headerUtils";
import { encode } from "./utils/headerUtils";




// HEADER
const header = document.getElementById('header');
// profile picture
const profContainer = document.getElementById('profContainer');
const profPic = new Image();
profPic.src = Profile;
profContainer.appendChild(profPic);


// n335t3r name
const nametag = document.getElementById('nametag');
nametag.textContent = "n335t3r";
const anthony = document.getElementById('anthony');
// Vigenere Cypher functionality
header.onmouseenter = () => {
    var neeCipher = encode("neester");
    var antCipher = encode("anthonyhorner");

    nametag.textContent = "";
    nametag.textContent = neeCipher;

    anthony.textContent = "";
    anthony.textContent = antCipher;
};
header.onmouseleave = () => {
    nametag.textContent = "n335t3r";
    anthony.textContent = "Anthony Horner";
};
// END HEADER



// CONTENT

// END CONTENT



// SOCIALS

// END SOCIALS