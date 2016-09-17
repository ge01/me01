// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeMPG();
});

// Global variables
var miles;      // To hold miles driven
var gallons;    // To hold gallons used
var mpg;        // To hold MPG

function computeMPG(){
  // Get the miles driven and assign it to the miles variable.
  miles = parseFloat(document.getElementById('miles').value);

  // Get the gallons used and assign it to the gallons variable.
  gallons =  parseFloat(document.getElementById('gallons').value);

  // Validate data entered
  if (miles === null || miles === "" || isNaN(miles)) {
    // Display an error message for miles
    document.getElementById('outMPG').innerHTML = "Miles must be filled out!";
  }
  else if (gallons === null || gallons === "" || isNaN(gallons)) {
    // Display an error message for gallons
    document.getElementById('outMPG').innerHTML = "Gallons must be filled out!";
  }
  else {
    // Calculate MPG
    var mpg = miles / gallons;

    // Display MPG
    document.getElementById('outMPG').innerHTML = mpg.toFixed(2);
  }
}
