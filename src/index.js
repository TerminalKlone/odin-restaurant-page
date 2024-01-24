import css from "./style.css"
import cowImage from './img/cow.png';
import chickenImage from './img/chicken.png';
import appleImage from './img/apple.png';

function init() {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const content = document.createElement('div');

    container.id = "container"
    header.id = "header";
    content.id = "content";

    document.body.appendChild(container);
    container.appendChild(header);
    container.appendChild(content);
}

function header() {
    const header = document.getElementById('header');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');

    title.id = "title";
    
    title.innerText = "Big Daddy Burgers"
    home.innerText = "HOME";
    menu.innerText = "MENU";
    about.innerText = "ABOUT";
    
    home.addEventListener('click', () => { console.log( "HOME" ); });
    menu.addEventListener('click', () => { console.log( "MENU" ); });
    about.addEventListener('click', () => { console.log( "ABOUT"); });

    header.appendChild(title);
    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
}

function home() {
    const content = document.getElementById('content');
    const grid = document.createElement('div');
    const beef = document.createElement('div');
    const chicken = document.createElement('div');
    const produce = document.createElement('div');

    const beefText = document.createElement('h3');
    const chickenText = document.createElement('h3');
    const produceText = document.createElement('h3');

    const beefImg = document.createElement('img');
    const chickenImg = document.createElement('img');
    const produceImg = document.createElement('img');

    beefImg.id = "cowImage";
    chickenImg.id = "chickenImage";
    produceImg.id = "appleImage";

    beefImg.src = cowImage;
    chickenImg.src = chickenImage
    produceImg.src = appleImage

    beefText.innerText = "100% Australian Beef\nPure premium ground beef, pressed and seasoned on the grill";
    chickenText.innerText = "Free Range Chicken\nAll our chicken is free range and RSPCA approved";
    produceText.innerText = "Locally grown produce\nAll our fresh produce is grown locally right here in Australia";

    beef.appendChild(beefImg);
    beef.appendChild(beefText);
    chicken.appendChild(chickenImg);
    chicken.appendChild(chickenText);
    produce.appendChild(produceImg);
    produce.appendChild(produceText);

    grid.id = "grid";
    beef.id = "card";
    chicken.id = "card";
    produce.id = "card";



    content.appendChild(grid);
    grid.appendChild(beef);
    grid.appendChild(chicken);
    grid.appendChild(produce);


}

init();
header();
home();