export class Order{

  id?: number;
  status?: OrderStatus;
  total_price?: number;
}

export enum OrderStatus { pending = 'pending', shipped = 'shipped', delivered = 'delivered' };

export interface orderInterface {
  id?: number,
  status?: OrderStatus,
  total_price?: number,
}
