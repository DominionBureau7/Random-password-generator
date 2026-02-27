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
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/`~";// String containing all possible password characters
    const passwordLength = 14;// Defines length of the generated password

    let password = "";
    for (let index = 0; index < passwordLength; index++) {// Loops to generate each character of the password
        const randomNumber = Math.floor(Math.random()* chars.length);// Generates a random index based on characters length. (.length because it cannot generate a number greater than the length of the string)
        password += chars.substring(randomNumber, randomNumber + 1);// Appends a random character to the password.
    }
    inputEl.value = password;// Displays generated password in input field
}
// Function to copy the generated password
function copyPassword(){
    inputEl.select();// Selects the text inside the input field
    inputEl.setSelectionRange(0, 9999);/*For mobile devices*/
    navigator.clipboard.writeText(inputEl.value);// Copies the selected password to the clipboard
    alertContainerEl.innerText = inputEl.value + " - copied";// Displays confirmation message showing the copied password
}