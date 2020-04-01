var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInput.value;
        console.log('username', username);
        console.log('password', password);
        if (username === 'cpalma' && password === 'abc123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'Username or password is incorrect!';
        console.log('errorBox.innerHTML', errorBox.innerHTML);
        errorBox.style = "display: block;";
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Login;
}());
var login = new Login();
