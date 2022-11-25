// Search bar
let searchIcon = document.querySelector("#search");
let search = document.querySelector(".search_bar");
let closeSearch = document.querySelector(".close_search");

// Open search bar
searchIcon.onclick = () => {
    search.classList.add("active");
};

// Close search bar
closeSearch.onclick = () => {
    search.classList.remove("active");
};

// Cart
let cartIcon = document.querySelector("#cart");
let cart = document.querySelector(".cart_page");
let closeCart = document.querySelector(".close_cart");

// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Wishlist
let wishlistIcon = document.querySelector("#wishlist");
let wishlist = document.querySelector(".wishlist_page");
let closeWishlist = document.querySelector(".close_wishlist");

// Open wishlist
wishlistIcon.onclick = () => {
    wishlist.classList.add("active");
};

// Close wishlist
closeWishlist.onclick = () => {
    wishlist.classList.remove("active");
};

// Navbar
document.getElementById("clothingButton").onclick = function () {
    location.href = "clothingpage.html"
};

document.getElementById("albumButton").onclick = function () {
    location.href = "albumspage.html"
};

// Mainpage: BORNPINK 'SHOP NOW' button
document.getElementById("shopNowClothing").onclick = function () {
    location.href = "clothingpage.html"
};

// Mainpage: ACCESSORIES 'SHOP NOW' button
document.getElementById("shopNowAcc").onclick = function () {
    location.href = "accessoriespage.html"
};

// Mainpage: BORNPINK 'BUY NOW' button
document.getElementById("buyNowAlbum").onclick = function () {
    location.href = "albumspage.html"
};

// Contact Us Form Validation
function validation() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.length < 5) {
        alert("Please enter your full name.")
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 1) {
        alert("Please enter a valid email.");
        return false;
    }

    if (message.length < 1) {
        alert("Please enter your message.");
        return false;
    }
    alert("Your message has been submitted successfully.")
}

// Sign up validation
function validationSU() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === '') {
        alert("Username is required.")
        return false;
    } else if (username.length < 5) {
        alert("Username must be at least 5 characters.")
        return false;
    }

    if (email === "") {
        alert("Email is required.");
        return false;
    } else if (email.indexOf("@") == -1 || email.length < 1) {
        alert("Please enter a valid email.");
        return false;
    }

    if (password === ""){
        alert("Password is required.");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return false;
    }
    alert("You have successfully signed up, " + username + "!");
}

// Login validation
function validationLI() {
    var username = document.getElementById("usernameLI").value;
    var password = document.getElementById("passwordLI").value;

    if (username === '') {
        alert("Your username is required.")
        return false;
    } else if (username.length < 5) {
        alert("Forgot your username? It must be at least 5 characters.")
        return false;
    }

    if (password === ""){
        alert("Your password is required.");
        return false;
    } else if (password.length < 8) {
        alert("Forgot your password? It must be more than 8 characters.")
        return false;
    }
    alert("Welcome back, " + username + "!" + " It's time to shop!");
}

// Payment page Validation
function validationP() {
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var fullname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var cardNo = document.getElementById("cardNo").value;
    var cardName = document.getElementById("cardName").value;
    var cardExp = document.getElementById("cardExp").value;
    var cardCVV = document.getElementById("cardCVV").value;

    if (email === "") {
        alert("Your email is required.");
        return false;
    }

    if (country === "") {
        alert("Please enter your country.");
        return false;
    }

    if (fullname === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.")
        return false;
    } else if (address.length < 5) {
        alert("Please enter your full address.");
        return false;
    }

    if (cardNo === "") {
        alert("Please enter your credit card number.");
        return false;
    } else if (cardNo.length < 16) {
        alert("Invalid card number. Try again.");
        return false;
    }

    if (cardName === "") {
        alert("Please enter cardholder's name.");
        return false;
    }

    if (cardExp === "") {
        alert("Please enter card expiration date.");
        return false;
    } 

    if (cardCVV === ""){
        alert("Please enter card CVV.");
        return false;
    } 

    if (cardCVV.length < 3 || cardCVV.length > 3) {
        alert("Invalid CVV. Try again");
        return false;
    }
    alert("Your order has been placed!");
}