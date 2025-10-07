import type { PaymentStrategy } from "../PaymentTypes.js";

export class CardPaymentStrategy implements PaymentStrategy{
    pay(amount: number): void {
        let fee = 10;
        let totalAmount = amount + fee;
       console.log(`Rs.${totalAmount} paid via Card with fee: Rs.${fee}`);
    }
}