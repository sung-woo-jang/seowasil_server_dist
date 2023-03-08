import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<{
        amount: number;
        address1: string;
        address2: string;
        address3: string;
        deliveryRequest: string;
        price: number;
    } & import("./entities/order.entity").Order>;
    getOrderList(): Promise<import("./entities/order.entity").Order[]>;
}
