"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeliverAddressDto = void 0;
const deliver_address_entity_1 = require("../entities/deliver-address.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateDeliverAddressDto extends (0, swagger_1.PickType)(deliver_address_entity_1.DeliverAddress, [
    'address1',
    'address2',
    'address3',
]) {
}
exports.CreateDeliverAddressDto = CreateDeliverAddressDto;
//# sourceMappingURL=create-deliver-address.dto.js.map