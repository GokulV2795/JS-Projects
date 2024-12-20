document.querySelector('#runBtn').addEventListener('click',()=>{
    
    let age = document.querySelector('#input').value
    if (age >= 18) {
        document.querySelector("#result").innerHTML="Welcome! You are eligible to access this page."
        } else {
        document.querySelector("#result").innerHTML="Sorry,you must be 18 or older to access this page."
    }
})