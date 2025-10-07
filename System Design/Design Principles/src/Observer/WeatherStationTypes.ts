export interface Subject{
    name:string;
    attach(observer:Observer):void;
    detach(observer:Observer):void;
    notify():void;
}

export interface Observer{
    update(subject:Subject):void;
}