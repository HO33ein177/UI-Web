const loginButton = document.getElementById("login-button-1");
const loginModal = document.getElementById("login-modal");

loginButton.addEventListener("click", () => {
    loginModal.style.display = "block"
    loginModal.style.background = "blur"
});

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", () =>{
    loginModal.style.display = "none"
});


const registerButton = document.getElementById("register-button");
const registerModal = document.getElementById("register-modal");
const registerCloseButton = document.getElementById("register-close");

registerButton.addEventListener("click", ()=>{
    registerModal.style.display = "block";
    loginModal.style.display = "none";
})

registerCloseButton.addEventListener("click", ()=>{
    registerModal.style.display = "none"
});

const color1Button = document.getElementById("color-1")
const color2Button = document.getElementById("color-2")
const color3Button = document.getElementById("color-3")
const color4Button = document.getElementById("color-4")
const priceTage = document.getElementById("price-tag")

color1Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$1499.00"
})

color2Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$2499.00"
})

color3Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$1799.00"
})

color4Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$2499.00"
})


const addToCartButton = document.getElementById("button-add-to-cart")
const cartItems = document.getElementById("cart-items")
addToCartButton.addEventListener("click",()=>{
    cartItems.innerHTML++
})

