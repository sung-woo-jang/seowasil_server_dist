import { DeliverAddress } from 'src/api/deliver-address/entities/deliver-address.entity';
declare const CreateDeliverAddressDto_base: import("@nestjs/common").Type<Pick<DeliverAddress, "address1" | "address2" | "address3">>;
export declare class CreateDeliverAddressDto extends CreateDeliverAddressDto_base {
    user_id: number;
}
export {};
