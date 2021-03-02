export class TODOItemModel {
    public id : number = Math.random();
    constructor(
        public done : boolean, 
        public title : string, 
        public description : string){}
}