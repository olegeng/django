document.getElementById('showLoginFormBtn').addEventListener('click', function() {
    let loginForm = document.getElementById('loginForm');
    loginForm.classList.toggle('hidden__logIn');
    console.log('Show login form clicked');
});

document.getElementById('hideLogInshowSignUp').addEventListener('click', function(event) {
    event.preventDefault(); // Щоб заборонити перехід за посиланням
    console.log('Hide login form and show sign-in clicked');
    let loginForm = document.getElementById('loginForm');
    loginForm.classList.toggle('hidden__logIn');
    console.log('Show sign up');
    let signupform = document.getElementById('signupForm');
    signupform.classList.toggle('hidden__sign-up');
    // Додайте інші дії, якщо потрібно
});
document.getElementById('hideSignUpshowLogIn').addEventListener('click', function() {
    let signup = document.getElementById('signupForm');
    signup.classList.toggle('hidden__sign-up');
    console.log('Hide Sign Up');
    let login = document.getElementById('loginForm');
    login.classList.toggle('hidden__logIn');
    console.log('Show Log In')
});

document.getElementById('SignUpToConnect').addEventListener('click', function() {
    let signup = document.getElementById('signupForm');
    signup.classList.toggle('hidden__sign-up');
    console.log('Show login form clicked');
});
document.getElementById('ShowSignUpFromHeader').addEventListener('click', function() {
    let signup = document.getElementById('signupForm');
    signup.classList.toggle('hidden__sign-up');
    console.log('Show login form clicked');
});