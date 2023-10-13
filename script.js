function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var maleChecked = document.getElementById('maleCheckbox').checked;
    var femaleChecked = document.getElementById('femaleCheckbox').checked;
    var gender = (maleChecked && femaleChecked) ? 'Male, Female' : (maleChecked ? 'Male' : (femaleChecked ? 'Female' : ''));
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        var popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
        document.getElementById('popupContent').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'flex';
    } else {
        alert('Please fill out all fields.');
    }
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}
