/*document.querySelector('#runBtn').addEventListener('click',()=>{
    
    let age = document.querySelector('#input').value
    if (age >= 18) {
        document.querySelector("#result").innerHTML="Welcome! You are eligible to access this page."
        } else {
        document.querySelector("#result").innerHTML="Sorry,you must be 18 or older to access this page."
    }
})*/
document.querySelector('#runBtn').addEventListener('click', () => {
    let age = document.querySelector('#input').value;
    const body = document.getElementById('body');

    if (age >= 18) {
        document.querySelector("#result").innerHTML = "Welcome! You are eligible to access this page.";
        body.style.backgroundImage = "url('./back.jpg')"; // Set background for eligible age
    } else {
        document.querySelector("#result").innerHTML = "Sorry, you must be 18 or older to access this page.";
        body.style.backgroundImage = "url('minor-background.jpg')"; // Set background for underage
    }
});