export interface ISubject{
    name:string;
    subscribe(observer: IObserver ):void;
    unsubscribe(observer: IObserver):void;
    notifyAll():void;
}


export interface IObserver{
    uniqueId:string;
    update(subject:ISubject):void;
}