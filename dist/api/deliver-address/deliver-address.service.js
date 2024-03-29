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
exports.DeliverAddressService = void 0;
const deliver_address_repository_1 = require("./deliver-address.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../users/users.repository");
let DeliverAddressService = class DeliverAddressService {
    constructor(deliverAddressRepository, usersRepository) {
        this.deliverAddressRepository = deliverAddressRepository;
        this.usersRepository = usersRepository;
    }
    async createAddress(createDeliverAddressDto) {
        const { user_id } = createDeliverAddressDto;
        const user = await this.usersRepository.getById(user_id);
        return await this.deliverAddressRepository.createAddress(createDeliverAddressDto, user);
    }
    async getDeliveryAddresses(user_id) {
        return await this.deliverAddressRepository.getDeliveryAddresses(user_id);
    }
    async getDefaultDeliveryAddresses(user_id) {
        return await this.deliverAddressRepository.getDefaultDeliveryAddresses(user_id);
    }
    async updateDefaultDeliverAddressByUserId(updateDeliverAddressDto) {
        return await this.deliverAddressRepository.updateDefaultDeliverAddressByUserId(updateDeliverAddressDto);
    }
};
DeliverAddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deliver_address_repository_1.DeliverAddressRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [deliver_address_repository_1.DeliverAddressRepository,
        users_repository_1.UsersRepository])
], DeliverAddressService);
exports.DeliverAddressService = DeliverAddressService;
//# sourceMappingURL=deliver-address.service.js.map