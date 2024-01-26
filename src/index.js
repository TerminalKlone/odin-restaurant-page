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
    
    home.addEventListener('click', () => { handleHomeClick() });
    menu.addEventListener('click', () => { handleMenuClick(); });
    about.addEventListener('click', () => { console.log( "ABOUT"); });

    header.appendChild(title);
    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
}

function handleHomeClick() {
    removeContent();
    const content = document.getElementById('content');
    const grid = document.createElement('div');
    const beef = document.createElement('div');
    const chicken = document.createElement('div');
    const produce = document.createElement('div');

    const beefText = document.createElement('h4');
    const chickenText = document.createElement('h4');
    const produceText = document.createElement('h4');

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

function handleMenuClick() {
    const menuItemArray = [];
    addMenuItems(menuItemArray);
    console.log(menuItemArray)
    console.log(menuItemArray[0].name)

    // loop through each item in the menu item class

    // display on the screen
}

class item {
    
    constructor(name, price, ingredients) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }


}

function addMenuItems(array) {
    const menuItem1 = new item("Starndard Burger", 15.99, "Beef Patty, cheese, burger sauce, pickles, lettuce")
    const menuItem2 = new item("Double Beef Double Cheese", 19.99, "2 x Beef Patty, 2 x Cheese, Burger Sauce, Pickles, Onion");
    const menuItem3 = new item("Bacon Burger", 18.99, "Beef Patty, Cheese, Bacon, Burger Sauce, Lettuce, Tomato, Onion");
    const menuItem4 = new item("Veggie Burger", 14.99, "Veggie Patty, Cheese, Burger Sauce, Pickles, Lettuce, Tomato, Onion");
    const menuItem5 = new item("Chicken Burger", 16.99, "Southern Fried Chicken, Cheese, Spicy Mayo, Pickles, Lettuce, Taomato, Onion");
    const menuItem6 = new item("Chicken Bacon Burger", 19.99, "Southern Fried Chicken, Bacon, Cheese, Spicy Mayo, Pickles, Lettuce, Taomato, Onion");
    
    array.push(menuItem1);
    array.push(menuItem2);
    array.push(menuItem3);
    array.push(menuItem4);
    array.push(menuItem5);
    array.push(menuItem6);    
}


function removeContent() {
    console.log("REMOVE CONTENT")
    const content = document.getElementById('content');
    
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

init();
header();
handleHomeClick();


// Create