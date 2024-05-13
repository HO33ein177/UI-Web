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

const cartModal = document.getElementById("miniCart-modal")
const cartButton = document.getElementById("cartButton")
cartButton.addEventListener("click",()=>{
    cartModal.style.display = 'block'
})

const closeButtonMiniCart = document.getElementById("closeButton")
closeButtonMiniCart.addEventListener("click",()=>{
    cartModal.style.display = 'none'
})

const productBox1 = document.getElementById("product-box-1")
const deleteButton1 = document.getElementById("deleteButton-1")

deleteButton1.addEventListener("click",()=>{
    productBox1.style.display = 'none'
})

const productBox = document.getElementById("product-box")
const deleteButton = document.getElementById("deleteButton")

deleteButton.addEventListener("click",()=>{
    productBox.style.display = 'none'
})