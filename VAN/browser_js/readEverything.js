// Create an object to store the screen reader functionality
var screenReader = {};

// Function to read the content of an element
screenReader.readElement = function(element) {
  // Create a new temporary element to store the text
  var tempElement = document.createElement("div");
  tempElement.setAttribute("role", "text");

  // Get the text content of the element
  var textContent = element.textContent || element.innerText || "";

  // Add the text content to the temporary element
  tempElement.innerHTML = textContent;

  // Append the temporary element to the body
  document.body.appendChild(tempElement);

  // Use the text-to-speech API to read the text
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(textContent));

  // Remove the temporary element from the body
  document.body.removeChild(tempElement);
};

// Function to read the content of a page
screenReader.readPage = function() {
  // Get all the elements on the page
  var elements = document.querySelectorAll("*");

  // Loop through each element and read its content
  for (var i = 0; i < elements.length; i++) {
    screenReader.readElement(elements[i]);
  }
};

// Add a button to the page to trigger the screen reader
var button = document.createElement("button");
button.innerHTML = "Read Page";
document.addEventListener("keydown", function() {
  screenReader.readPage();
});
document.body.appendChild(button);