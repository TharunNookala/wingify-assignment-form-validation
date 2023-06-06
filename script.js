function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    // Retrieve form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Please add valid email address";
        document.getElementById("email").style.marginBottom = '0';
        document.getElementById("email").style.borderColor = 'red';
    }

    //  Validate date of birth
    var dateInput = document.getElementById("date");
    var monthSelect = document.getElementById("month");
    var yearSelect = document.getElementById("year");
    if (
        !validateDateOfBirth(dateInput.value, monthSelect.value, yearSelect.value)
    ) {
        document.getElementById("dob-error").textContent =
            "Please enter a valid date of birth";
        document.getElementById("date").style.marginBottom = '0';
        document.getElementById("month").style.marginBottom = '0';
        document.getElementById("year").style.marginBottom = '0';
        document.getElementById("date-of-birth").style.borderColor = 'red';
        return; // Stop form submission
    }

    // Date of birth validation function
    function validateDateOfBirth(date, month, year) {
        var dateRegex = /^\d{1,2}$/;
        var monthRegex = /^\d{2}$/;
        var yearRegex = /^\d{4}$/;

        if (!dateRegex.test(date) || !monthRegex.test(month) || !yearRegex.test(year))
            return false;

        var parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(date));
        if (
            parsedDate.getMonth() + 1 !== parseInt(month) ||
            parsedDate.getDate() !== parseInt(date) ||
            parsedDate.getFullYear() !== parseInt(year)
        ) {
            return false;
        }

        return true;
    }
    // Password validation
    const passwordRegex = /\d/;
    if (!passwordRegex.test(password)) {
        document.getElementById("password-error").textContent = "Password must have a numeric value";
        document.getElementById("password").style.marginBottom = '0';
        document.getElementById("password").style.borderColor = 'red';

    }

    // Submit the form if there are no errors
    if (emailRegex.test(email) && passwordRegex.test(password)) {
        document.getElementById("signup-form").submit();
        document.querySelector('.right-container form').style.display = 'none';
        document.getElementById("signup-success").textContent = "Welcome! Your account is successfully created.";
        console.log("Welcome! Your account is successfully created.")
    }
}


