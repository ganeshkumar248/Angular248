var Customer = /** @class */ (function () {
    function Customer(cid, cName, cLocation) {
        if (cName === void 0) { cName = ""; }
        if (cLocation === void 0) { cLocation = ""; }
        this.cid = 0;
        this.cName = "";
        this.cLocation = "";
        this.cid = cid;
        this.cName = cName;
        this.cLocation = cLocation;
    }
    Customer.prototype.showDetails = function () {
        console.log("Customer Id " + this.cid + " Customer Name " + this.cName + " Customer Location " + this.cLocation);
        console.log("--------------------------------------");
    };
    return Customer;
}());
// let c1: Customer = new Customer();
var c2 = new Customer(101);
var c3 = new Customer(102, "Ganesh");
var c4 = new Customer(103, "Macherla", "MannarPolur");
// c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
