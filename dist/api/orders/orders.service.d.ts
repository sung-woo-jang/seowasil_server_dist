import { UsersRepository } from './../users/users.repository';
import { ProductsRepository } from './../products/products.repository';
import { SmsService } from './../sms/sms.service';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private ordersRepository;
    private usersRepository;
    private productsRepository;
    private smsService;
    constructor(ordersRepository: OrdersRepository, usersRepository: UsersRepository, productsRepository: ProductsRepository, smsService: SmsService);
    createOrder(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Order>;
    getOrderList(): Promise<import("./entities/order.entity").Order[]>;
}
