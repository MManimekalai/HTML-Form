var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Form validation
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var addressLine1 = address1.value.trim();
    var addressLine2 = address2.value.trim();
    var pincode = pin.value.trim();
    var genderElements = document.getElementsByName("gender");
    var selectedGender = "";
    var foodElements = document.getElementsByName("food");
    var selectedFood = [];
    var stateValue = state.value.trim();
    var countryValue = country.value.trim();

    // Check if at least two food options are selected
    for (var i = 0; i < foodElements.length; i++) {
        if (foodElements[i].checked) {
            selectedFood.push(foodElements[i].value);
        }
    }

    if (
        firstName === "" ||
        lastName === "" ||
        addressLine1 === "" ||
        pincode === "" ||
        selectedGender === "" ||
        selectedFood.length < 2 ||
        stateValue === "" ||
        countryValue === ""
    ) {
        alert("Please fill out all required fields and choose at least 2 food options.");
    } else {
        // If validation passes, add the data to the table
        tablecontent(firstName, lastName, addressLine1 + ", " + addressLine2, pincode, selectedGender, selectedFood.join(", "), stateValue, countryValue);

        // Clear form fields
        fname.value = "";
        lname.value = "";
        address1.value = "";
        address2.value = "";
        pin.value = "";
        for (var i = 0; i < genderElements.length; i++) {
            genderElements[i].checked = false;
        }
        for (var i = 0; i < foodElements.length; i++) {
            foodElements[i].checked = false;
        }
        state.value = "";
        country.value = "";
    }
});
