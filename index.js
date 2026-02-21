// Declaring all the required elements
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");    
// Adding click event listener to the button and copy icon
btnEl.addEventListener("click", () => {
    createPassword();
});
copyIcon.addEventListener("click", () => {
    copyPassword()
    if (inputEl.value) {
        alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    },2000);
}
});

// Function to generate random password
function createPassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/`~";
    const passwordLength = 14;

    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random()* chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputEl.value = password;
}
// Function to copy the generated password
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);/*For mobile devices*/
    navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.innerText = inputEl.value + " - copied";

}