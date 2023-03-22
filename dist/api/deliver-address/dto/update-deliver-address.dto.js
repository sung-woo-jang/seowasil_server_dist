"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeliverAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_deliver_address_dto_1 = require("./create-deliver-address.dto");
class UpdateDeliverAddressDto extends (0, swagger_1.PickType)(create_deliver_address_dto_1.CreateDeliverAddressDto, [
    'user_id',
]) {
}
exports.UpdateDeliverAddressDto = UpdateDeliverAddressDto;
//# sourceMappingURL=update-deliver-address.dto.js.map