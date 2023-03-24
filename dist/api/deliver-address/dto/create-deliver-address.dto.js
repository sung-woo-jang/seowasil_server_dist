"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeliverAddressDto = void 0;
const class_transformer_1 = require("class-transformer");
const deliver_address_entity_1 = require("../entities/deliver-address.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateDeliverAddressDto extends (0, swagger_1.PickType)(deliver_address_entity_1.DeliverAddress, [
    'address1',
    'address2',
    'address3',
]) {
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreateDeliverAddressDto.prototype, "user_id", void 0);
exports.CreateDeliverAddressDto = CreateDeliverAddressDto;
//# sourceMappingURL=create-deliver-address.dto.js.map