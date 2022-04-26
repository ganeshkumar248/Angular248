class Product {
    private productId: number = 0;
    private productName: string = "";
    private productPrice: number = 0;
    private productQuantity: number = 0;

    constructor(productId: number) {
        this.productId = productId;
    }

    public get ProductId(): number {
        return this.productId;
    }

    public get ProductName(): string {
        return this.productName;
    }

    public get ProductPrice(): number {
        return this.productPrice;
    }

    public get ProductQuantity(): number {
        return this.productQuantity;
    }

    public set ProductName(value: string) {
        this.productName = value;
    }

    public set ProductPrice(value: number) {
        this.productPrice = value;
    }

    public set ProductQuantity(value: number) {
        this.productQuantity = value;
    }
}

    let prodObj: Product = new Product(248);

    prodObj.ProductName = "Mobile";
    prodObj.ProductPrice = 15000;
    prodObj.ProductQuantity = 1;

    console.log("Product Id "+prodObj.ProductId);
    console.log("Product Name "+prodObj.ProductName);
    console.log("Product Price "+prodObj.ProductPrice);
    console.log("Product Quantity "+prodObj.ProductQuantity);







