import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { DeliverAddressService } from './deliver-address.service';
export declare class DeliverAddressController {
    private readonly deliverAddressService;
    constructor(deliverAddressService: DeliverAddressService);
    createAddress(createDeliverAddressDto: CreateDeliverAddressDto): Promise<import("./entities/deliver-address.entity").DeliverAddress>;
    getDeliveryAddressesListByUserId(user_id: number): Promise<any[]>;
}
