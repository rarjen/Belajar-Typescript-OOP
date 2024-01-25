describe("Class", () => {
  class Customer {
    // Constructor
    constructor() {
      console.log("Create new customer");
    }
  }

  class Order {}

  //Class
  it("Can create class", () => {
    const customer: Customer = new Customer(); //object
    const order: Order = new Order(); //object
  });

  //Constructor
  it("Can create constructor", () => {
    new Customer();
    new Customer();
  });
});
