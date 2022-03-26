
export interface IPost {
    id?:number;
    userId?:number;
    title?:string;
    body?:string;
}

export class Post implements IPost {
    constructor(public id:number, public userId:number, public title:string, public body:string){}
}

export interface IComment {
    id?:number;
    psotId?:number;
    name?:string;
    email?:string;
    body?:string;
}

export class Comment implements IComment {
    constructor(public id:number, public postId:number, public name:string, public email:string, public body:string){}
}
