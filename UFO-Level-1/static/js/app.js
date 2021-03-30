// from data.js
var tableData = data;

// Check imported data in console
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the form
var form = d3.select("form");

// grab references to the form input element text to filter
var filterBtn = d3.select("#filter-btn");
var datetimeEl = d3.select("#datetime");
// BONUS
// var cityEl = d3.select("#city");
// var stateEl = d3.select("#state");
// var countryEl = d3.select("#country");
// var shapeEl = d3.select("#shape");
// var durationEl = d3.select("#duaration");
// var commentsEl = d3.select("#comments");

// Loop through table data and populate table
function renderTable(sightingList) {
  // check if data is empty then goto to home to normal table
  if (sightingList.length === 0) {
    alert("Sorry, No results for this query. Ensure correct format and no blanks!");
  } else {
    // if data is not empty render it in new table
    d3.select("tbody").html(""); // clear existing table
    // loop and append new table rows and data cells / fields
    sightingList.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
}

// Function to handle input change
function handleClick(event) {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // grab the value of the input field to filter
  var inputDateTime = datetimeEl.property("value");
  console.log(inputDateTime);
  // run filter function using the input text
  var filteredData = tableData.filter(
    (sighting) => sighting.datetime === inputDateTime
  );
  // check filtered data
  console.log("filtered data =", filteredData);
  renderTable(filteredData);
}

// Initialise default table no filters
renderTable(tableData);

// Listen for filter button click event
filterBtn.on("click", handleClick);
form.on("submit", handleClick); // handles 'enter' key pressed event instead of btn click