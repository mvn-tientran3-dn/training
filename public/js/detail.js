var showUser = function () {
    let url = new URL(window.location.href);
    let id = url.searchParams.get('id');
    let users = JSON.parse(localStorage.getItem("users"));
    let item = users.find(item => item.id == id);
    let html = '';
    html += '<div class="user-image">' +
        '<img src="'+ item.avatar +'"/>' +
        '</div>' +
        '<div class="user-info">' +
        '<div>' +
        '<pan>Name: </span><span>' + item.first_name + ' ' + item.last_name + '</span>' +
        '</div>' +
        '<div>' +
        '<pan>Email: </span><span>' + item.email + '</span>' +
        '</div>' +
        '<span></span>' +
        '</div>';
    console.log(html);
    document.getElementById('information').innerHTML = html;

};

showUser();
