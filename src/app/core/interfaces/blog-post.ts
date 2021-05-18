import { BlogComment } from "./blog-comment";

export interface BlogPost {
    id:number;
    title:string;
    author:string;
    content:string;
    date:number;
    comments:BlogComment[]
}
