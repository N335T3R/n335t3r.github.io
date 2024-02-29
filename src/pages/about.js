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
    q1.classList.add('question');
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
    neeLine1.textContent = "etymology & semantics a withheld mystery (for now)";
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
    ant.classList.add('ant');
    entryAnt.appendChild(ant);
    ant.textContent = "Anthony Horner";
    const antPronunc = document.createElement('p');
    antPronunc.classList.add('antPronunc');
    entryAnt.appendChild(antPronunc);
    antPronunc.textContent = "| kan-deh-diht |";

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
    antLine2.textContent = "B.A., English (Saint Vincent College | 2018)";
    const antLine3 = document.createElement('li');
    antDefLines.appendChild(antLine3);
    antLine3.textContent = "currently, a seeker of entry-level front-end web and/or javascript development";




    // WhereAmI
    const whereAmI = document.createElement('div');
    whereAmI.classList.add('whereAmI');
    aboutContent.appendChild(whereAmI);

    const q2 = document.createElement('h3');
    q2.classList.add('question');
    whereAmI.appendChild(q2);
    q2.textContent = "You might be asking, what is this place?";

    const whereAnswer = document.createElement('div');
    whereAnswer.classList.add('qAnswer');
    whereAmI.appendChild(whereAnswer);


    const whereP1 = document.createElement('p');
    whereAnswer.appendChild(whereP1);
    whereP1.textContent = "This is a humble interweb nexus I call home. I created this place with the combined powers of javascript, webpack5, html, and css. There’s not much here now, but I find the best homes are more populated by people than things. At the bottom of this page, you can connect with me via a slew of social media options. Above, you can explore from the navigation bar a modest selection of content hosted herein. If you want to see my party trick, click my name. Then click my face to learn more about the Vigenere cipher. You can also explore willy-nilly, as the spirit moves you. I’m just happy you’re here.";
    const whereP2 = document.createElement('p');
    whereAnswer.appendChild(whereP2);
    whereP2.textContent = "To send recommendations in the realm of books, tutorials, music, or site features you’d like to see incorporated here, send me a message via one of my social media links!";




    // Contact
    const contact = document.createElement('div');
    contact.classList.add('aboutQuestion', 'contact');
    aboutContent.appendChild(contact);

    const q3 = document.createElement('h3');
    q3.classList.add('question');
    contact.appendChild(q3);
    q3.textContent = "You might want to hire/collaborate/ask a question?";


    const contactAnswer = document.createElement('div');
    contactAnswer.classList.add('qAnswer');
    contact.appendChild(contactAnswer);

    const contactP1 = document.createElement('p');
    contactAnswer.appendChild(contactP1);
    contactP1.textContent = "Wow, great! I LOVE making new connections, especially when connection leads to fun projects! I’m hoping to soon incorporate a contact widget to provide a more personalized experience for my guests who wish to send professional inquiries. Until then, the social media options provided herein are a perfectly suitable option for soliciting my attention. The choice of via della communicazione is yours, but know I’m more likely to seriously consider inquiries from verified user profiles.";
    const contactP2 = document.createElement('p');
    contactAnswer.appendChild(contactP2);
    contactP2.textContent = "For hiring inquiries, reach out via LinkedIn.";
}