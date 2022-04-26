var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = 0;
        this.productName = "";
        this.productPrice = 0;
        this.productQuantity = 0;
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this.productName;
        },
        set: function (value) {
            this.productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductPrice", {
        get: function () {
            return this.productPrice;
        },
        set: function (value) {
            this.productPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductQuantity", {
        get: function () {
            return this.productQuantity;
        },
        set: function (value) {
            this.productQuantity = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var prodObj = new Product(248);
prodObj.ProductName = "Mobile";
prodObj.ProductPrice = 15000;
prodObj.ProductQuantity = 1;
console.log("Product Id " + prodObj.ProductId);
console.log("Product Name " + prodObj.ProductName);
console.log("Product Price " + prodObj.ProductPrice);
console.log("Product Quantity " + prodObj.ProductQuantity);
