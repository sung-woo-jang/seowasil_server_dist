import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersRepository extends Repository<Order> {
    createOrder(createOrderDto: CreateOrderDto): Promise<{
        user_id: number;
        product_id: number;
        name: string;
        amount: number;
        phoneNumber: string;
        deliveryRequest: string;
        address1: string;
        address2: string;
        address3: string;
        price: number;
    } & Order>;
    getOrderList(): Promise<Order[]>;
}
