import type { PaymentStrategy } from "../PaymentTypes.js";

export class UPIPaymentStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`${amount} paid via UPI`);
    }

}