var carts = [];
var totalCartAmount = 0;
var products = [
    {
        id: 1,
        name: 'Product 1',
        price: 20,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 30,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 3,
        name: 'Product 2',
        price: 50,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 4,
        name: 'Product 2',
        price: 1000,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 5,
        name: 'Product 1',
        price: 20,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 6,
        name: 'Product 2',
        price: 30,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 7,
        name: 'Product 2',
        price: 50,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
    {
        id: 8,
        name: 'Product 2',
        price: 1000,
        unit: '$',
        total: 1,
        image: '../public/image/1.png'
    },
];
window.localStorage.setItem('products', JSON.stringify(products));
window.localStorage.setItem('carts', JSON.stringify(carts));

var getListProduct = function () {
    let html = '';
    let button = '';
    products.map(function (product) {
        if (product.total !== 0) {
            button = '<button onclick="addToCart('+ product.id +')">Add to cart</button>'
        } else {
            button = '<button disabled>Add to cart</button>'
        }
        html += '<div class="product" id="product">' +
            '<div class="col-md-3">' +
                '<div class="image-product">' +
                    '<img src=' + product.image + '>' +
                    '<div class="overlay">' +
                    '<div class="link">' +
                        '<a href="" class="quick-view"/>Quick view</a>' +
                        '<a href="" class="add-to-cart"/>Add to cart</a>' +
                    '</div>' +
                    '</div>' +
                '</div>' +
                '<div>' +
                    '<p class="name-product">' + product.name + '<p>' +
                    '<p class="price-product">' + product.price + ' ' + product.unit + '</p>' +
                    '<div class="option-color">' +
                        '<span class="border-color-product"><span class="color-product"></span></span>' +
                        '<span class="border-color-product"><span class="color-product"></span></span>' +
                        '<span class="border-color-product"><span class="color-product"></span></span>' +
                    '</div>' +
                    '<div class="btn-add-to-cart">' +
                        button
                    + '</div>' +
                '</div>' +
            '</div>' +
            '</div>';
    });
    document.getElementById("list-product").innerHTML = html;
};

var addToCart = function(id) {
    let carts = JSON.parse(localStorage.getItem('carts'));
    totalCartAmount = ++totalCartAmount;
    let index = products.findIndex(obj => {
        return obj.id === id
    });
    --products[index].total;
    let indexCart = isIssetInCart(id);
    if (indexCart !== -1) {
        carts[indexCart].quantity = carts[indexCart].quantity + 1;
        window.localStorage.setItem('carts', JSON.stringify(carts));
        document.getElementById("cart").style.backgroundColor = '#c39d62';
        document.getElementById("cart").innerHTML = totalCartAmount;

        return;
    }
    carts.push({
        id: products[index].id,
        name: products[index].name,
        price: products[index].price,
        unit: products[index].unit,
        quantity: 1,
    });
    window.localStorage.setItem('carts', JSON.stringify(carts));
    document.getElementById("cart").style.backgroundColor = '#c39d62';
    document.getElementById("cart").innerHTML = totalCartAmount;
};

var isIssetInCart = function(id) {
    let carts = JSON.parse(localStorage.getItem('carts'));

    return carts.findIndex(obj => obj.id === id);
};

var reload = function() {
    let carts = JSON.parse(localStorage.getItem("carts"));
    console.log(carts);
    document.getElementById("carts").innerHTML = carts;
};

getListProduct();

