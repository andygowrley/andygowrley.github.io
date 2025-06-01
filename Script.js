// Get a reference to the button element by its ID
const button = document.getElementById('myButton');

// Check if the button exists before trying to add an event listener
if (button) {
    // Add an event listener to the button
    button.addEventListener('click', function() {
        // When the button is clicked, execute this function
        alert('You clicked the button! Hello from JavaScript!');

        // You could also change text on the page, like this:
        // const introParagraph = document.querySelector('.intro p');
        // if (introParagraph) {
        //     introParagraph.textContent = 'The button has been clicked! This text changed.';
        // }

        // Or change styles:
        // button.style.backgroundColor = 'purple';
    });
} else {
    console.warn("Button with ID 'myButton' not found.");
}

// Another simple example: log a message when the page loads
window.onload = function() {
    console.log('The page has fully loaded!');
};

// You can also greet the user with a message
console.log('Script loaded successfully!');
