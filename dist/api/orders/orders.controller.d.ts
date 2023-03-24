import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Order>;
    getOrderList(): Promise<import("./entities/order.entity").Order[]>;
}
