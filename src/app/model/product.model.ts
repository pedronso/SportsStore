export class Product {

    constructor(
        //adicionar atributo icon
        public id?: number,
        public name?: string,
        public category?: string,
        public description?:string,
        public price?: number,
        public src? : any ) {}

}