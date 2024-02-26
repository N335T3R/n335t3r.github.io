import "./styles.css";

import Profile from "./assets/n335t3rProfile.png";
import Github from "./assets/githubGreen.png";
import KofiCup from "./assets/kofi.png";
import Instagram from "./assets/instagram.png";
import GoodreadsLogo from "./assets/goodreads.png";

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
profContainer.onmouseenter = () => {
    var neeCipher = encode("neester");
    var antCipher = encode("anthonyhorner");

    nametag.textContent = "";
    nametag.textContent = neeCipher;

    anthony.textContent = "";
    anthony.textContent = antCipher;
};
profContainer.onmouseleave = () => {
    nametag.textContent = "n335t3r";
    anthony.textContent = "Anthony Horner";
};
// END HEADER



// CONTENT

// END CONTENT



// SOCIALS
const git = document.getElementById('git');
const kofi = document.getElementById('kofi');
const insta = document.getElementById('insta');
const goodreads = document.getElementById('goodreads');

const gitLogo = new Image();
gitLogo.src = Github;
const kofiLogo = new Image();
kofiLogo.src = KofiCup;
const instaLogo = new Image();
instaLogo.src = Instagram;
const goodreadsBook = new Image();
goodreadsBook.src = GoodreadsLogo;

git.appendChild(gitLogo);
kofi.appendChild(kofiLogo);
insta.appendChild(instaLogo);
goodreads.appendChild(goodreadsBook);

// END SOCIALS