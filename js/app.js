let jsonData = TABLE_DATA;

let table = document.querySelector("table");      //selecting the html table tag
let data = Object.keys(jsonData[0]);

var myTimer;  // creating timer variable

function generateHtmlTable(table, data) {
 for (let element of data) {
  let row = table.insertRow();
  for (key in element) {
   let cell = row.insertCell();
   let text = document.createTextNode(element[key]);
   cell.appendChild(text);
  }
 }
}

generateHtmlTable(table, jsonData); // calling the generateHtmlTable and passing the table and jsonData into it

function sortTable() {     // a function to Sort the table numerically using the ID

 let table = document.querySelector("table");
 let unsorted = true;

 while (unsorted) {

   unsorted = false;
   rows = table.rows;

  for (var i = 1; i < (rows.length - 1); i++) {

   shouldSort = false;

   m = rows[i].getElementsByTagName("TD")[0];
   n = rows[i + 1].getElementsByTagName("TD")[0];

   if (Number(m.innerHTML) > Number(n.innerHTML)) {
    //if so, mark as a switch and break the loop:
    shouldSort = true;
    break;
   }
  }
  if (shouldSort) {

   rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
   unsorted = true;
  }
 }

}

// A timer function that runs at interval of 1 minute and randomise the data in the table
function startRandom() {
 myTimer = setInterval(function() {

  var Table = document.querySelector("table"); //getting the html table tag
  Table.innerHTML = ""; //clearing the table rows to append new Random Json data to it

  jsonData.sort(function(a, b) {
   return 0.5 - Math.random()
  }); // Randomising the Json Array
  this.generateHtmlTable(Table, jsonData); // calling the generateHtml Table function


 }, 1000);
}


// function to stop random table data
function stopRandom() {
 clearInterval(myTimer);
}