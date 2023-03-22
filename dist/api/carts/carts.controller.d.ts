import { CreateCartDto } from './dto/create-cart.dto';
import { CartsService } from './carts.service';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    createCart(createCartDto: CreateCartDto): Promise<import("./entities/cart.entity").Cart>;
    getCartByUser(userId: number): Promise<any[]>;
    updateCart(): Promise<import("./entities/cart.entity").Cart[]>;
    deleteCart(id: number): Promise<import("typeorm").DeleteResult>;
}
