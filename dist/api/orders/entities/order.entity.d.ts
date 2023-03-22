import { Product } from 'src/api/products/entities/product.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { User } from 'src/api/users/entities/user.entity';
export declare class Order extends CommonEntity {
    name: string;
    phoneNumber: string;
    deliveryRequest: string;
    address1: string;
    address2: string;
    address3: string;
    amount: number;
    price: number;
    user: User;
    product: Product;
}
