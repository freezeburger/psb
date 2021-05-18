export interface ProductServer {
  id:number;
  filename:string;
  title:string;
  description:string;
  price:number;
  height?:number;
  width?:number;
  rating?:number;
}
