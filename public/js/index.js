var getListUser = function () {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
    xhttp.send();
    xhttp.onload = function() {
        let resp = JSON.parse(this.responseText);
        window.localStorage.setItem('users', JSON.stringify(resp.data));
        let users = JSON.parse(localStorage.getItem("users"));
        displayUsers(users);
    }
};

var deleteUser = function (id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://reqres.in/api/users/" + id);
    let users = JSON.parse(localStorage.getItem("users"));

    xhr.onreadystatechange = function () {
        if (xhr.status === 204) {
            users = users.filter(function(user) {
                return user.id !== id
            });
            window.localStorage.setItem('users', JSON.stringify(users));
            displayUsers(JSON.parse(localStorage.getItem("users")));
        }};

    xhr.send();
};

var displayUsers = function (users) {
    let html = '';
    users.map(function (user) {
        user.avatar = user.avatar ? user.avatar : 'https://www.keycdn.com/img/support/image-processing.png';
        html += '<tr>' +
            '<td><img src="' + user.avatar + '" class="avatar"></td>' +
            '<td> Group A</td>' +
            '<td>' + user.first_name + ' ' + user.last_name + '</td>' +
            '<td>' + user.email + '</td>' +
            '<td>' +
            '<a href="detail.html?id='+user.id+'" class="btn-view">View</a>' +
            '<a href="#" onClick="deleteUser('+ user.id +')" class="btn-delete">Delete</a>' +
            '</td>' +
            '</tr>'
    });
    document.getElementById('list-user').innerHTML = html;
};

var saveUser = function () {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let id = Math.floor(Math.random() * 1000) + 1;

    if (firstName && lastName && email) {
        const users = JSON.parse(localStorage.getItem("users"));
        users.push({
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: '',
        });
        window.localStorage.setItem('users', JSON.stringify(users));
        displayUsers(users);
    }
};
getListUser();

