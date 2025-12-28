// ❌ PROBLEM: This class violates the Open–Closed Principle (OCP)
//
// Open–Closed Principle states:
// "A class should be OPEN for extension but CLOSED for modification."
//
// ISSUE HERE:
// Every time a NEW payment method is introduced (e.g., Stripe, Razorpay, Crypto),
// we MUST MODIFY this class by adding a new `else if` condition.
//
// This means:
// - The class is NOT closed for modification
// - Business logic becomes tightly coupled
// - Code becomes harder to maintain and scale
// - High risk of introducing bugs when changing existing logic
//
// WHY THIS IS BAD DESIGN:
// - Violates OCP
// - Violates Dependency Inversion Principle (depends on concrete logic)
// - Makes testing difficult
// - Grows into a large if-else / switch-case block

class PaymentService1 {
  processPayment(paymentType: string): void {
    // ❌ Conditional logic based on payment type
    // This forces us to MODIFY this method whenever a new payment type is added
    if (paymentType === "credit_card") {
      console.log("Processing credit card payment...");
      // Credit card specific payment logic
    } else if (paymentType === "paypal") {
      console.log("Processing PayPal payment...");
      // PayPal specific payment logic
    } else if (paymentType === "upi") {
      console.log("Processing upi payment");
      // UPI specific payment logic
    } else {
      // ❌ Adding new payment types requires changing this block again
      console.log("Unsupported payment type");
    }
  }
}

// ❌ Client code depends on string-based payment types
// Any typo or invalid value causes runtime issues
const paymentService = new PaymentService1();

paymentService.processPayment("credit_card");
paymentService.processPayment("paypal");
paymentService.processPayment("upi");
