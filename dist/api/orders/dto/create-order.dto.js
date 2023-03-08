"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const order_entity_1 = require("../entities/order.entity");
class CreateOrderDto extends (0, swagger_1.PickType)(order_entity_1.Order, [
    'address1',
    'address2',
    'address3',
    'deliveryRequest',
    'amount',
    'price',
]) {
}
exports.CreateOrderDto = CreateOrderDto;
//# sourceMappingURL=create-order.dto.js.map