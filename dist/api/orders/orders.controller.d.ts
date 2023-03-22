import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
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
