export class CardPaymentStrategy {
    pay(amount) {
        let fee = 10;
        let totalAmount = amount + fee;
        console.log(`Rs.${totalAmount} paid via Card with fee: Rs.${fee}`);
    }
}
