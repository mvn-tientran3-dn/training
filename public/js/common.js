const accountLogin = JSON.parse(localStorage.getItem("accountLogin"));

var isLogin = function () {
    console.log(accountLogin);
    if (accountLogin !== 'admin') {
        window.location.replace("login.html");
        return;
    }
};

isLogin();
