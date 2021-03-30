// from data.js
var tableData = data;

// Check imported data in console
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through table data and populate table
data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
