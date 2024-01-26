import css from "./style.css"
import cowImage from './img/cow.png';
import chickenImage from './img/chicken.png';
import appleImage from './img/apple.png';
import stardardBeefImage from './img/standard.webp';
import doubleBeefImage from './img/double-beef.webp';
import baconBeefImage from './img/bacon.webp';
import veggieBurgerImage from './img/veggie.webp';
import chickenBurgerImage from './img/chicken.webp';
import chickenBaconBurgerImage from './img/chicken-bacon.webp';


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
    about.addEventListener('click', () => { handleAboutClick(); });

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
    removeContent();
    const menuItemArray = [];
    addMenuItems(menuItemArray);

    const content = document.getElementById('content');
    const grid = document.createElement('div');

    grid.id = "grid";
    // loop through each item in the menu item class
    for (const burger in menuItemArray) {
        const burgerCard = document.createElement('div');
        const burgerImg = document.createElement('img');
        const burgerName = document.createElement('h2');
        const burgerPrice = document.createElement('h4');
        const burgerIngredients = document.createElement('p');

        burgerImg.src = burgerImageGetter(menuItemArray[burger].name);
        burgerName.innerText = menuItemArray[burger].name;
        burgerPrice.innerText = "$" + menuItemArray[burger].price;
        burgerIngredients.innerText = menuItemArray[burger].ingredients;

        burgerImg.id = "burger-image";
        burgerCard.id = "burger-card";
        burgerIngredients.id = "burger-text";

        burgerCard.appendChild(burgerImg);
        burgerCard.appendChild(burgerName);
        burgerCard.appendChild(burgerPrice);
        burgerCard.appendChild(burgerIngredients);
        grid.appendChild(burgerCard);
        content.appendChild(grid);
    }
}

function handleAboutClick() {
    removeContent();
    
    const content = document.getElementById('content');
    const aboutDiv = document.createElement('div');

    aboutDiv.id = "about-div";

    const title = document.createElement('h2');
    const info = document.createElement('p');

    title.innerText = "Just good people! Making good burgers!"
    info.innerText = "Welcome to Big Daddy Burgers, where size meets flavor in every bite! At Big Daddy Burgers, we believe that bigger is always better when it comes to crafting the perfect burger experience. Prepare to embark on a culinary adventure that takes your taste buds to new heights of satisfaction.";


    aboutDiv.appendChild(title);
    aboutDiv.appendChild(info);
    content.appendChild(aboutDiv);
}

function burgerImageGetter(name) {
    switch (name) {
        case 'Standard Burger': return stardardBeefImage;
        case 'Double Beef Double Cheese': return doubleBeefImage;
        case 'Bacon Burger': return baconBeefImage;
        case 'Veggie Burger': return veggieBurgerImage;
        case 'Chicken Burger': return chickenBurgerImage;
        case 'Chicken Bacon Burger': return chickenBaconBurgerImage;
    }
}

class item {
    constructor(name, price, ingredients) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}

function addMenuItems(array) {
    const menuItem1 = new item("Standard Burger", 15.99, "Beef Patty, Cheese, Burger sauce, Pickles, Lettuce, Tomato")
    const menuItem2 = new item("Double Beef Double Cheese", 19.99, "2 x Beef Patty, 2 x Cheese, Burger Sauce, Pickles, Onion, Tomato");
    const menuItem3 = new item("Bacon Burger", 18.99, "Beef Patty, Cheese, Bacon, Burger Sauce, Lettuce, Tomato, Onion");
    const menuItem4 = new item("Veggie Burger", 14.99, "Veggie Patty, Cheese, Burger Sauce, Pickles, Lettuce, Tomato, Onion");
    const menuItem5 = new item("Chicken Burger", 16.99, "Southern Fried Chicken, Cheese, Spicy Mayo, Pickles, Lettuce, Tomato, Onion");
    const menuItem6 = new item("Chicken Bacon Burger", 19.99, "Southern Fried Chicken, Bacon, Cheese, Spicy Mayo, Pickles, Lettuce, Taomato, Onion");
    
    array.push(menuItem1);
    array.push(menuItem2);
    array.push(menuItem3);
    array.push(menuItem4);
    array.push(menuItem5);
    array.push(menuItem6);    
}


function removeContent() {
    const content = document.getElementById('content');
    
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

init();
header();
handleHomeClick();


// Create