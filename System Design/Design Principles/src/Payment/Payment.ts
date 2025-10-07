import type { PaymentStrategy } from "./PaymentTypes.js";

export class Payment{
    paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }

    performPay(amount:number){
        this.paymentStrategy.pay(amount);
    }

    setPaymentMethod(paymentStrategy:PaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }
}






// interface PaymentStrategy{
//     pay(amount:number):void;
// }

// class UPIPaymentStrategy implements PaymentStrategy{
//     pay(amount: number): void {
//         console.log(`${amount} paid via UPI`);
//     }

// }

// class CardPaymentStrategy implements PaymentStrategy{
//     pay(amount: number): void {
//         let fee = 10;
//         let totalAmount = amount + fee;
//        console.log(`Rs.${totalAmount} paid via Card with fee: Rs.${fee}`);
//     }
// }

// class Payment{
//     paymentStrategy: PaymentStrategy;

//     constructor(paymentStrategy: PaymentStrategy){
//         this.paymentStrategy = paymentStrategy;
//     }

//     performPay(amount:number){
//         this.paymentStrategy.pay(amount);
//     }

//     setPaymentMethod(paymentStrategy:PaymentStrategy){
//         this.paymentStrategy = paymentStrategy;
//     }
// }

// // Usage
// const upiPay = new UPIPaymentStrategy();
// const cardPay = new CardPaymentStrategy();
// const payment:Payment = new Payment(cardPay);
// payment.performPay(100);
// payment.setPaymentMethod(upiPay);
// payment.performPay(100);

