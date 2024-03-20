import "./styles.css";

import Profile from "./assets/n335t3rProfile.png";
import Github from "./assets/githubGreen.png";
import KofiCup from "./assets/kofi.png";
import Instagram from "./assets/instagram.png";
import GoodreadsLogo from "./assets/goodreads.png";
import LinkedInPlug from "./assets/LI-Logo.png";

import makeTable from "./utils/headerUtils";
import { encode } from "./utils/headerUtils";
import sizeAdjust from "./utils/sizeAdjust";

import populateHome from "./pages/home";
import populateAbout from "./pages/about";
import populateBlog from "./pages/blog";
import { size } from "lodash";

import weatherFetch from "./utils/weatherUtils";
import { skimWeatherData } from "./utils/weatherUtils";
import { updateWeatherDiv } from "./utils/weatherUtils";



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
namespace.onclick = () => {
    var neeCipher = encode("neester");
    var antCipher = encode("anthonyhorner");

    nametag.textContent = "";
    nametag.textContent = neeCipher;

    anthony.textContent = "";
    anthony.textContent = antCipher;
};
namespace.ondblclick = () => {
    nametag.textContent = "n335t3r";
    anthony.textContent = "Anthony Horner";
};

var weatherData = [];
weatherFetch().then((data) => {
    // console.log(data);
    weatherData = skimWeatherData(weatherData, data);
    console.log(weatherData);
    updateWeatherDiv(weatherData);
}).catch((err) => {
    console.log('error:', err);
});
// END HEADER


sizeAdjust();
populateHome();
// CONTENT
const home = document.getElementById('home');
const about = document.getElementById('about');
const blog = document.getElementById('blog');

home.addEventListener('click', () => {
    populateHome();
});
about.addEventListener('click', () => {
    populateAbout();
});
blog.addEventListener('click', () => {
    populateBlog();
});

// END CONTENT



// SOCIALS
const git = document.getElementById('git');
const kofi = document.getElementById('kofi');
const insta = document.getElementById('insta');
const goodreads = document.getElementById('goodreads');
const linkedIn = document.getElementById('linkedIn');

const gitLogo = new Image();
gitLogo.src = Github;
const kofiLogo = new Image();
kofiLogo.src = KofiCup;
const instaLogo = new Image();
instaLogo.src = Instagram;
const goodreadsBook = new Image();
goodreadsBook.src = GoodreadsLogo;
const linkedInLogo = new Image();
linkedInLogo.src = LinkedInPlug;

git.appendChild(gitLogo);
kofi.appendChild(kofiLogo);
insta.appendChild(instaLogo);
goodreads.appendChild(goodreadsBook);
linkedIn.appendChild(linkedInLogo);
// END SOCIALS