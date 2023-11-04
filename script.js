const form = document.getElementById("form");
const table = document.getElementById("myTable");

function addRow(firstName, lastName, pincode, address, gender, food, state, country) {
  const row = table.insertRow(-1);
  row.insertCell(0).innerHTML = firstName;
  row.insertCell(1).innerHTML = lastName;
  row.insertCell(2).innerHTML = pincode;
  row.insertCell(3).innerHTML = address;
  row.insertCell(4).innerHTML = gender;
  row.insertCell(5).innerHTML = food;
  row.insertCell(6).innerHTML = state;
  row.insertCell(7).innerHTML = country;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

const firstName = form.elements["firstName"].value;
const lastName = form.elements["lastName"].value;
const pincode = form.elements["pincode"].value;
const address = form.elements["address"].value;
const gender = form.elements["gender"].value;
const food = [];
const foodInputs = form.elements["food[]"];
let foodCount = 0;

for (let i = 0; i < foodInputs.length; i++) {
  if (foodInputs[i].checked) {
    food.push(foodInputs[i].value);
    foodCount++;
  }
}

if (foodCount < 2) {
  alert("Choose atleast two");
  return;
}

const state = form.elements["state"].value;
const country = form.elements["country"].value;

addRow(firstName, lastName, pincode, address, gender, food.join(", "), state, country);

form.reset();
});
