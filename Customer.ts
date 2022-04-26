<<<<<<< HEAD
class Customer{

   public cid: number = 0;
   public cName: String = "";
   public cLocation: String = "";

   constructor(cid: number, cName: String = "", cLocation: String = "") {
        this.cid = cid;
        this.cName = cName;
        this.cLocation = cLocation;
   }

   public showDetails(): void {
       console.log("Customer Id "+this.cid+" Customer Name "+this.cName+" Customer Location "+this.cLocation);
       console.log("--------------------------------------");
   }
}

// let c1: Customer = new Customer();
let c2: Customer = new Customer(101);
let c3: Customer = new Customer(102, "Ganesh");
let c4: Customer = new Customer(103, "Macherla", "MannarPolur");

// c1.showDetails();
c2.showDetails();
c3.showDetails();
=======
class Customer{

   public cid: number = 0;
   public cName: String = "";
   public cLocation: String = "";

   constructor(cid: number, cName: String = "", cLocation: String = "") {
        this.cid = cid;
        this.cName = cName;
        this.cLocation = cLocation;
   }

   public showDetails(): void {
       console.log("Customer Id "+this.cid+" Customer Name "+this.cName+" Customer Location "+this.cLocation);
       console.log("--------------------------------------");
   }
}

// let c1: Customer = new Customer();
let c2: Customer = new Customer(101);
let c3: Customer = new Customer(102, "Ganesh");
let c4: Customer = new Customer(103, "Macherla", "MannarPolur");

// c1.showDetails();
c2.showDetails();
c3.showDetails();
>>>>>>> 70d83031033adb69350a65805779d028549a15ca
c4.showDetails();