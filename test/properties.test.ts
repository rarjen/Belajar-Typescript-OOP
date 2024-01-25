describe("Properties", () => {
  type ID = string | number;
  class Customer {
    // Properties
    readonly id: ID;
    name: string;
    age?: number;

    // Constructor
    constructor(id: ID, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  it("Can create properties", () => {
    const customer1: Customer = new Customer(1, "Otniel Kevin");
    console.log(customer1);
    customer1.age = 23;

    console.log(customer1);

    const customer2: Customer = new Customer("2", "Otniel Kevin");
    console.log(customer2);
    customer2.age = 24;

    console.log(customer2);
  });
});
