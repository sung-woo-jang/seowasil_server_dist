import { Order } from '../entities/order.entity';
declare const CreateOrderDto_base: import("@nestjs/common").Type<Pick<Order, "name" | "amount" | "phoneNumber" | "deliveryRequest" | "address1" | "address2" | "address3" | "price">>;
export declare class CreateOrderDto extends CreateOrderDto_base {
}
export {};
