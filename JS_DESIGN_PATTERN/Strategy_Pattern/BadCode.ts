class PaymentService1 {
  pay(method: string) {
    if (method === "card") {
      console.log("Paying with card");
    } else if (method === "upi") {
      console.log("Paying with UPI");
    } else if (method === "paypal") {
      console.log("Paying with PayPal");
    }
  }
}

// Problems:
// Too many if-else
// Adding new payment = modifying this class
// Breaks Open/Closed Principle
