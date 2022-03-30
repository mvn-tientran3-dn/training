var carts = JSON.parse(localStorage.getItem('carts'));
var shipping = carts.length === 0 ? 0 : 50;

var displayCart = function () {
    let html = '';
    shipping = carts.length === 0 ? 0 : 50;
    carts.map(function (cart, index) {
        html += '<tr>' +
            '<td>' + ++index +'</td>' +
            '<td colspan="2">'+ cart.name +'</td>' +
            '<td colspan="2">'+ cart.quantity +'</td>' +
            '<td colspan="2">'+ cart.price + ' ' + cart.unit +'</td>' +
            '<td colspan="2">'+ cart.price * cart.quantity+' $</td>' +
            '<td colspan="2"><button onClick="removeItemCart(' + cart.id + ')" class="btn btn-delete">Delete</button></td>' +
        '</tr>';
    });
    document.getElementById("list-cart").innerHTML = html;
    document.getElementById("total").innerHTML = sum() + ' $';
    document.getElementById("shipping").innerHTML = shipping + ' $';
    document.getElementById("total-money").innerHTML = sum() + shipping + ' $';
};

// sum total money
var sum = function () {
    return carts.reduce((a, {price, quantity}) => a + (price * quantity), 0);
};

var removeItemCart = function (id) {
    carts = carts.filter(function(cart) {
        return cart.id !== id
    });
    window.localStorage.setItem('carts', JSON.stringify(carts));
    displayCart();
};

displayCart();
