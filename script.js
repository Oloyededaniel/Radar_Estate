// script.js

function validateForm() {
    //exception for unfilled name,email or message section
    //This fulfills requirement 4.7
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        return false;
    }

    
    const emailInput = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        return false;
    }

    
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        return false;
    }

    //This fulfills requirement 4.8
    alert('Message sent successfully!');
    clearForm();
    return false;
}

//This fulfills requirement 4.9
function clearForm() {
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
