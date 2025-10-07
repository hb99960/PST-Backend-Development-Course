import { Payment } from "./Payment.js";
import { CardPaymentStrategy } from "./Strategies/CardPaymentStrategy.js";
import { UPIPaymentStrategy } from "./Strategies/UPIPaymentStrategy.js";
// Usage
const upiPay = new UPIPaymentStrategy();
const cardPay = new CardPaymentStrategy();
const payment = new Payment(cardPay);
payment.performPay(100);
payment.setPaymentMethod(upiPay);
payment.performPay(100);
