// ✅ Abstraction (Extension Point)
//
// PaymentStrategy defines a contract for all payment methods.
// New payment types can be ADDED by implementing this interface
// WITHOUT modifying existing code.
interface PaymentStrategy {
  processPayment(): void;
}

// ✅ Concrete Strategy: Credit Card Payment
//
// If credit card payment logic changes,
// ONLY this class will be affected.
class CreditCardPayment implements PaymentStrategy {
  processPayment(): void {
    console.log("Processing credit card payment...");
  }
}

// ✅ Concrete Strategy: PayPal Payment
//
// Adding PayPal-specific changes does NOT affect PaymentService.
class PayPalPayment implements PaymentStrategy {
  processPayment(): void {
    console.log("Processing PayPal payment...");
  }
}

// ✅ Concrete Strategy: UPI Payment
//
// New payment methods follow the same structure.
class UpiPayment implements PaymentStrategy {
  processPayment(): void {
    console.log("Processing UPI payment...");
  }
}

// Added New Payment Method
class CryptoPayment implements PaymentStrategy {
  processPayment(): void {
    console.log("Processing crypto payment...");
  }
}

// ✅ PaymentService is CLOSED for modification
//
// It depends on the abstraction (PaymentStrategy),
// not on concrete payment implementations.
//
// This class will NEVER change when a new payment method is added.
class PaymentService {
  constructor(private paymentStrategy: PaymentStrategy) {}

  processPayment(): void {
    // Delegates payment processing to the strategy
    // Polymorphism removes the need for if-else / switch-case logic
    this.paymentStrategy.processPayment();
  }
}

// ✅ Client code decides which strategy to use
// PaymentService remains unchanged

const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();
const upiPayment = new UpiPayment();

const paymentService1 = new PaymentService(creditCardPayment);
paymentService1.processPayment();

const paymentService2 = new PaymentService(paypalPayment);
paymentService2.processPayment();

const paymentService3 = new PaymentService(upiPayment);
paymentService3.processPayment();
