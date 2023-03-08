import { CommonEntity } from 'src/common/entities/common.entity';
import { User } from 'src/api/users/entities/user.entity';
export declare class DeliverAddress extends CommonEntity {
    address1: string;
    address2: string;
    address3: string;
    user: User;
}
