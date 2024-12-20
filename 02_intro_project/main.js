document.querySelector('#joinBtn').addEventListener('click', ()=>{
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value
    if (firstName ==='' || lastName ===''){
        document.querySelector('#result').innerHTML="Please Fill all the Input fields"
    }else{
        document.querySelector('#result').innerHTML= `${firstName} ${lastName}`
    }
})
//document.querySelector('#result').innerHTML= firstName + " " + lastName -- Method 1