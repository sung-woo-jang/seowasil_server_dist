import { User } from 'src/api/users/entities/user.entity';
import { DeliverAddress } from './entities/deliver-address.entity';
import { Repository } from 'typeorm';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';
export declare class DeliverAddressRepository extends Repository<DeliverAddress> {
    createAddress(createDeliverAddressDto: CreateDeliverAddressDto, user: User): Promise<DeliverAddress>;
    getDeliveryAddresses(user_id: number): Promise<any[]>;
    getDefaultDeliveryAddresses(user_id: number): Promise<any>;
    updateDefaultDeliverAddressByUserId(updateDeliverAddressDto: UpdateDeliverAddressDto): Promise<any[]>;
}
