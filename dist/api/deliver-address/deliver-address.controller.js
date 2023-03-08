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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverAddressController = void 0;
const skip_auth_decorator_1 = require("./../../common/decorators/skip-auth.decorator");
const create_deliver_address_dto_1 = require("./dto/create-deliver-address.dto");
const common_1 = require("@nestjs/common");
const deliver_address_service_1 = require("./deliver-address.service");
let DeliverAddressController = class DeliverAddressController {
    constructor(deliverAddressService) {
        this.deliverAddressService = deliverAddressService;
    }
    async createAddress(createDeliverAddressDto) {
        return this.deliverAddressService.createAddress(createDeliverAddressDto);
    }
    async getDeliveryAddressesListByUserId(user_id) {
        return await this.deliverAddressService.getDeliveryAddressesListByUserId(user_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deliver_address_dto_1.CreateDeliverAddressDto]),
    __metadata("design:returntype", Promise)
], DeliverAddressController.prototype, "createAddress", null);
__decorate([
    (0, common_1.Get)('/:user_id'),
    __param(0, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeliverAddressController.prototype, "getDeliveryAddressesListByUserId", null);
DeliverAddressController = __decorate([
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.Controller)('deliver-address'),
    __metadata("design:paramtypes", [deliver_address_service_1.DeliverAddressService])
], DeliverAddressController);
exports.DeliverAddressController = DeliverAddressController;
//# sourceMappingURL=deliver-address.controller.js.map