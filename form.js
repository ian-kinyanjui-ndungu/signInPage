document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordError = document.getElementById('password-error');

    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords don't match");
            passwordError.textContent = "Passwords don't match";
            return false;
        } else {
            confirmPassword.setCustomValidity('');
            passwordError.textContent = '';
            
            if (password.value.length < 8) {
                password.setCustomValidity("Password must be at least 8 characters");
                passwordError.textContent = "Password must be at least 8 characters";
                return false;
            } else {
                password.setCustomValidity('');
                return true;
            }
        }
    }

    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(e) {
        if (!validatePassword()) {
            e.preventDefault();
        } else {
            e.preventDefault();
            alert('submitted!');
        }
    });
});