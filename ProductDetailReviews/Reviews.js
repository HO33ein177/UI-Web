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

function revi(){
    var reviewsTab = document.getElementById("ad-tab")
    reviewsTab.innerHTML = "hosein Borimnejad"
}


// function addFunc(){
//     var additionalTab = document.getElementById("add-tab")
// }


function desFunc(){
    var descriptionTab = document.getElementById("description")
    var additionalTab = document.getElementById("additionalInformation")
    var reviewTab = document.getElementById("reviews")
    var relatedProduct = document.getElementById("relatedProducts")

    descriptionTab.style.display = 'block'
    relatedProduct.style.display = 'block'
    additionalTab.style.display = 'none'
    reviewTab.style.display = 'none'
}

function addFunc(){
    var descriptionTab = document.getElementById("description")
    var additionalTab = document.getElementById("additionalInformation")
    var reviewTab = document.getElementById("reviews")
    var relatedProduct = document.getElementById("relatedProducts")

    descriptionTab.style.display = 'none'
    relatedProduct.style.display = 'block'
    additionalTab.style.display = 'block'
    reviewTab.style.display = 'none'
}

function revFunc(){
    var descriptionTab = document.getElementById("description")
    var additionalTab = document.getElementById("additionalInformation")
    var reviewTab = document.getElementById("reviews")
    var relatedProduct = document.getElementById("relatedProducts")

    descriptionTab.style.display = 'none'
    relatedProduct.style.display = 'none'
    additionalTab.style.display = 'none'
    reviewTab.style.display = 'block'
}

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

const addToCart = document.getElementById("button-add-to-cart")
const miniCartItems = document.getElementById("miniCartItems")

addToCart.addEventListener("click",()=>{
    miniCartItems.innerHTML++
})

const cartIcon = document.getElementById("cart-icon")
const miniCart = document.getElementById("miniCart-modal")
const miniCartCloseButton = document.getElementById("closeButton")
cartIcon.addEventListener("click",()=>{
    miniCart.style.display = 'block'
})
miniCartCloseButton.addEventListener("click",()=>{
    miniCart.style.display = 'none'
})




