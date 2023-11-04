var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var firstName = document.getElementById("fname").value.trim();
    var lastName = document.getElementById("lname").value.trim();
    var addressLine1 = document.getElementById("address1").value.trim();
    var addressLine2 = document.getElementById("address2").value.trim();
    var pincode = document.getElementById("pin").value.trim();
    var genderElements = document.getElementsByName("gender");
    var selectedGender = "";
    var foodElements = document.getElementsByName("food");
    var selectedFood = [];
    var stateValue = document.getElementById("state").value.trim();
    var countryValue = document.getElementById("country").value.trim();

    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            selectedGender = genderElements[i].value;
        }
    }

    for (var i = 0; i < foodElements.length; i++) {
        if (foodElements[i].checked) {
            selectedFood.push(foodElements[i].value);
        }
    }

    if (
        firstName === "" ||
        lastName === "" ||
        addressLine1 === "" ||
        addressLine2 === "" ||
        pincode === "" ||
        selectedGender === "" ||
        selectedFood.length < 2 ||
        stateValue === "" ||
        countryValue === ""
    ) {
        alert("Please fill out all required fields and choose at least 2 food options.");
    } else {
        tablecontent(firstName, lastName, addressLine1 + ", " + addressLine2, pincode, selectedGender, selectedFood.join(", "), stateValue, countryValue);

        document.getElementById("right-panel").style.display = "block";

        // Clear form fields
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("address1").value = "";
        document.getElementById("address2").value = "";
        document.getElementById("pin").value = "";
        for (var i = 0; i < genderElements.length; i++) {
            genderElements[i].checked = false;
        }
        for (var i = 0; i < foodElements.length; i++) {
            foodElements[i].checked = false;
        }
        document.getElementById("state").value = "";
        document.getElementById("country").value = "";
    }
});
