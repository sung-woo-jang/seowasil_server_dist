import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { DeliverAddressRepository } from './deliver-address.repository';
import { UsersRepository } from '../users/users.repository';
export declare class DeliverAddressService {
    private deliverAddressRepository;
    private usersRepository;
    constructor(deliverAddressRepository: DeliverAddressRepository, usersRepository: UsersRepository);
    createAddress(createDeliverAddressDto: CreateDeliverAddressDto): Promise<import("./entities/deliver-address.entity").DeliverAddress>;
    getDeliveryAddressesListByUserId(user_id: number): Promise<any[]>;
}
