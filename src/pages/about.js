export default function populateAbout() {
    const content = document.getElementById('content');
    content.innerHTML = "";


    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');
    content.appendChild(aboutContent);


    // Content Blocks
    // WhoAmI
    const whoAmI = document.createElement('div');
    whoAmI.classList.add('whoAmI');
    aboutContent.appendChild(whoAmI);

    const q1 = document.createElement('h3');
    q1.classList.add('q1');
    whoAmI.appendChild(q1);
    q1.textContent = "You might be asking, what is a n335t3r?";

    const defNeester = document.createElement('div');
    defNeester.classList.add('defNeester');
    whoAmI.appendChild(defNeester);
    
    const entryNee = document.createElement('div');
    entryNee.classList.add('entryNee');
    defNeester.appendChild(entryNee);
    const nee = document.createElement('h4');
    nee.classList.add('nee');
    entryNee.appendChild(nee);
    nee.textContent = "n335t3r";
    const neePronunc = document.createElement('p');
    neePronunc.classList.add('neePronunc');
    entryNee.appendChild(neePronunc);
    neePronunc.textContent = "| knee-stir |";

    const neeDef = document.createElement('div');
    neeDef.classList.add('neeDef');
    defNeester.appendChild(neeDef);
    const neeArt = document.createElement('p');
    neeArt.classList.add('neeArt');
    neeDef.appendChild(neeArt);
    neeArt.textContent = "(unknown)";
    const neeDefLines = document.createElement('ol');
    neeDefLines.classList.add('neeDefLines');
    neeDef.appendChild(neeDefLines);
    const neeLine1 = document.createElement('li');
    neeDefLines.appendChild(neeLine1);
    neeLine1.textContent = "etymology & semantics a withheld mystery";
    const neeLine2 = document.createElement('li');
    neeDefLines.appendChild(neeLine2);
    neeLine2.textContent = "online pseudonym for (see next entry)";






    const defAnthony = document.createElement('div');
    defAnthony.classList.add('defNeester');
    whoAmI.appendChild(defAnthony);
    
    const entryAnt = document.createElement('div');
    entryAnt.classList.add('entryNee');
    defAnthony.appendChild(entryAnt);
    const ant = document.createElement('h4');
    ant.classList.add('nee');
    entryAnt.appendChild(ant);
    ant.textContent = "Anthony Horner";
    const antPronunc = document.createElement('p');
    antPronunc.classList.add('neePronunc');
    entryAnt.appendChild(antPronunc);
    antPronunc.textContent = "| KAN-deh-diht |";

    const antDef = document.createElement('div');
    antDef.classList.add('neeDef');
    defAnthony.appendChild(antDef);
    const antArt = document.createElement('p');
    antArt.classList.add('neeArt');
    antDef.appendChild(antArt);
    antArt.textContent = "(noun)";
    const antDefLines = document.createElement('ol');
    antDefLines.classList.add('neeDefLines');
    antDef.appendChild(antDefLines);
    const antLine1 = document.createElement('li');
    antDefLines.appendChild(antLine1);
    antLine1.textContent = "simultaneously a learner, artist, thinker";
    const antLine2 = document.createElement('li');
    antDefLines.appendChild(antLine2);
    antLine2.textContent = "currently, a seeker of entry-level front-end web and/or javascript development";






    // WhereAmI
    const whereAmI = document.createElement('div');
    whereAmI.classList.add('whereAmI');
    aboutContent.appendChild(whereAmI);


    // Contact
    const contact = document.createElement('div');
    contact.classList.add('contact');
    aboutContent.appendChild(contact);
}
