var login = function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === 'admin@gmail.com' && password === 'Password123') {
        window.localStorage.setItem('accountLogin', 'admin');
        window.location.replace("index.html");

        return;
    }
    window.location.reload();
}
