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
const image = document.getElementById("iphone-image")

color1Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$1499.00"
    image.style.background = 'url(14prosilver.jpg)'
    image.style.backgroundSize = 'cover'

})

color2Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$2499.00"
    image.style.background = 'url(iphone14progold.jpg)'
    image.style.backgroundSize = 'cover'
})

color3Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$1799.00"
    image.style.background = 'url(14problack.jpg)'
    image.style.backgroundSize = 'cover'
})

color4Button.addEventListener("click",()=>{
    priceTage.innerHTML = "$2499.00"
    image.style.background = 'url(14propurple.jpg)'
    image.style.backgroundSize = 'cover'
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


const fiveStar = document.getElementById("5star")
fiveStar.addEventListener("click",()=>{
    console.log(5)
})
const fiveStarOne = document.getElementById("5star-1")
fiveStarOne.addEventListener("click",()=>{
    console.log(5)
})
const fiveStarTwo = document.getElementById("5star-2")
fiveStarTwo.addEventListener("click",()=>{
    console.log(5)
})
const fiveStarThree = document.getElementById("5star-3")
fiveStarThree.addEventListener("click",()=>{
    console.log(5)
})
const fiveStarFour = document.getElementById("5star-4")
fiveStarFour.addEventListener("click",()=>{
    console.log(5)
})

const FourStar = document.getElementById("4star")
FourStar.addEventListener("click",()=>{
    console.log(4)
})

const ThreeStar = document.getElementById("3star")
ThreeStar.addEventListener("click",()=>{
    console.log(3)
})

const TwoStar = document.getElementById("2star")
TwoStar.addEventListener("click",()=>{
    console.log(2)
})

const oneStar = document.getElementById("1star")
oneStar.addEventListener("click",()=>{
    console.log(1)
})

const likeButton = document.getElementById("likeButton")
const blackHeart = document.getElementById("blackHeart")
likeButton.addEventListener("click",()=>{
    if (likeButton.style.backgroundColor === 'white'){
        blackHeart.style.background = 'none'
        likeButton.style.background = 'url(redheart.png)'
        likeButton.style.background = 'cover'
    }
    else
        likeButton.style.background = 'white'
})

const number = document.getElementById("number")
function minus(){
    if (number.innerHTML !== '0')
        number.innerHTML--
}

function plus(){
    number.innerHTML++
}

