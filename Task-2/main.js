 // Get references to the input, button, and message elements
 const colorInput = document.querySelector('#colorInput');
 const submitButton = document.querySelector('#submitButton');
 const colorMessage = document.querySelector('#colorMessage');

 // Add a click event listener to the button
 submitButton.addEventListener('click', () => {
     const favoriteColor = colorInput.value.trim(); // Get the input value and trim whitespace
     if (favoriteColor) {
         // Use template literals to set the message
         colorMessage.textContent = `Your favorite color is ${favoriteColor}!`;
     } else {
         // Handle empty input
         colorMessage.textContent = 'Please enter a color!';
     }
 });