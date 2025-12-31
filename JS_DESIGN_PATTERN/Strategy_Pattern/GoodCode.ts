// 1. Strategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// 2. Different Strategies
class CardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ₹${amount} using Card`);
  }
}

class UpiPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

// 3. Context Class (Uses Strategy)
class PaymentService {
  constructor(private strategy: PaymentStrategy) {}

  pay(amount: number) {
    this.strategy.pay(amount);
  }
}

const upiPayment = new PaymentService(new UpiPayment());
upiPayment.pay(500);

const cardPayment = new PaymentService(new CardPayment());
cardPayment.pay(1000);
