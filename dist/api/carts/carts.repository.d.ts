import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
export declare class CartsRepository extends Repository<Cart> {
    getCartDetail(id: number): Promise<Cart>;
    getCartByUser(user_id: number): Promise<any[]>;
}
