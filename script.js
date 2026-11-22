/*FASTFOOD DELIVERY*/
/*MAIN JS*/


/*SELECT HTML ELEMENTS*/

//HEADER
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

//PAGE
const homePage = document.getElementById("homePage");
const cartSection = document.getElementById("cartSection");

//CART BUTTON
const backToHome = document.getElementById("backToHome");


/*PAGE ANIMATION FUNCTION*/
function playPageAnimation(element) {

element.classList.remove("page-enter");

void element.offsetWidth;

element.classList.add("page-enter");

}


/* CART POPUP SYSTEM */

// OPEN CART
cartButton.addEventListener("click", function() {

    cartSection.hidden = false;

    // RESET ANIMATION
    cartSection.classList.remove("show-cart");

    // RESTART ANIMATION
    void cartSection.offsetWidth;

    // START ANIMATION
    cartSection.classList.add("show-cart");

});


// CLOSE CART - BACK TO HOME
backToHome.addEventListener("click", function() {

    cartSection.classList.remove("show-cart");

    cartSection.hidden = true;

});


// CLOSE CART - X BUTTON
const closeCart = document.getElementById("closeCart");

closeCart.addEventListener("click", function() {

    cartSection.classList.remove("show-cart");

    cartSection.hidden = true;

});


// CLOSE CART - CLICK BACKGROUND
const cartOverlay = document.getElementById("cartOverlay");

cartOverlay.addEventListener("click", function() {

    cartSection.classList.remove("show-cart");

    cartSection.hidden = true;

});