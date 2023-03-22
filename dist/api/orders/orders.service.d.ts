import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<{
        name: string;
        amount: number;
        phoneNumber: string;
        deliveryRequest: string;
        address1: string;
        address2: string;
        address3: string;
        price: number;
    } & import("./entities/order.entity").Order>;
    getOrderList(): Promise<import("./entities/order.entity").Order[]>;
}
