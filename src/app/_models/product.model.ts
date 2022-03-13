export class Product {
    name:any;
    image:any;
    description:any;
    price:any;
    discount:any;
    average_rate:any;
    category_id:any;
    brand_id: any;
}

export interface ProductWithCounter  extends Product {
  cartCounter:number;
}
