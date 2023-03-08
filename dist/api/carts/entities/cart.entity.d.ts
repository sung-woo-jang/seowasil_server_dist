import { User } from 'src/api/users/entities/user.entity';
import { Product } from 'src/api/products/entities/product.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
export declare enum PaymentStatus {
    WAITING = "WAITING",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED",
    FAILED = "FAILED"
}
export declare class Cart extends CommonEntity {
    amount: number;
    paymentStatus: PaymentStatus;
    product: Product;
    user: User;
}
