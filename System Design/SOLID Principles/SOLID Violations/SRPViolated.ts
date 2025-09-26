export class Order {
    orderId:string;
    quantity:number;
    buyer:string;
    seller:string;

    constructor(orderId:string, quantity:number, buyer:string, seller:string){
        this.orderId = orderId;
        this.quantity = quantity;
        this.buyer = buyer;
        this.seller = seller;
    }

    calculateTotal() { /* pricing, discount */ }
    saveToDatabase() { /* persistence */ }
    sendConfirmationEmail() { /* email logic */ }
    updateInventory() { /* stock update */ }
}
  