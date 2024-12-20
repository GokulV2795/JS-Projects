//let isRaining = false
//if (isRaining) {
 //   document.querySelector('#result').innerHTML = "take an Umberlla!"
//} else{
 //document.querySelector('#result').innerHTML = "No need to take an Umberlla!"
//}
document.querySelector('#runBtn').addEventListener('click',()=>{
    let currentWeather = document.querySelector('#input').value

    if (currentWeather=== 'Raining' || currentWeather=== 'Too Hot' ){
        document.querySelector('#result').innerHTML = "take an Umberlla!"
    } else if (currentWeather==='Hot') {
        document.querySelector('#result').innerHTML = "take a Coolers with you!"
    } else if (currentWeather==='') {
        document.querySelector('#result').innerHTML = "Please Enter the Value"
    }
     else {
        document.querySelector('#result').innerHTML = "Go as you Like!"
    }
})