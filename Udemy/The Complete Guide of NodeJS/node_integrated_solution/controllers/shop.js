const Product = require('../models/product');
const Cart = require('../models/cart');

module.exports.getProducts = (request, response, next) => {
    Product.findAll()
        .then((results) => {
            response.render('shop/product-list', {
                products: results,
                pageTitle: 'All Products',
                path: '/products',
            });
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
};

module.exports.getProduct = (request, response, next) => {
    const productId = request.params.productId;
    Product.findById(productId)
        .then(([product]) => {
            response.render('shop/product-detail', {
                path: '/products',
                pageTitle: product[0].title,
                product: product[0],
            });
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
};

module.exports.getIndex = (request, response, next) => {
    Product.findAll()
        .then((results) => {
            response.render('shop/index', {
                products: results,
                pageTitle: 'Shop',
                path: '/',
            });
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
};

module.exports.getCart = (request, response, next) => {
    Cart.getCart((cart) => {
        Product.fetchAll((products) => {
            const cartProducts = [];
            for (product of products) {
                const cartProductData = cart.products.find((cartProduct) => {
                    return cartProduct.id === product.id;
                });
                if (cartProductData) {
                    cartProducts.push({
                        product: product,
                        quantity: cartProductData.quantity,
                    });
                }
            }
            response.render('shop/cart', {
                pageTitle: 'Your Cart',
                path: '/cart',
                products: cartProducts,
            });
        });
    });
};

module.exports.postCart = (request, response, nex) => {
    const productId = request.body.productId;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price);
    });
    response.redirect('/cart');
};

module.exports.postCartDelete = (request, response, next) => {
    const productId = request.body.productId;

    Product.findById(productId, (product) => {
        Cart.deleteProduct(product.id, product.price);
        response.redirect('/cart');
    });
};

module.exports.getOrders = (request, response, next) => {
    response.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders',
    });
};

module.exports.getCheckout = (request, response, next) => {
    response.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    });
};
