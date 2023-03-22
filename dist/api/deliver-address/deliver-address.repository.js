"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverAddressRepository = void 0;
const deliver_address_entity_1 = require("./entities/deliver-address.entity");
const typeorm_1 = require("typeorm");
let DeliverAddressRepository = class DeliverAddressRepository extends typeorm_1.Repository {
    async createAddress(createDeliverAddressDto, user) {
        const result = await this.create(Object.assign(Object.assign({}, createDeliverAddressDto), { user })).save();
        return result;
    }
    async getDeliveryAddresses(user_id) {
        const query = this.createQueryBuilder('deliver_address')
            .leftJoinAndSelect('deliver_address.user', 'user')
            .select([
            'deliver_address.id as id',
            'deliver_address.address1 as address1',
            'deliver_address.address2 as address2',
            'deliver_address.address3 as address3',
            'deliver_address.is_default as is_default',
        ])
            .where('user.id = :user_id', { user_id });
        const result = await query.getRawMany();
        return result;
    }
    async getDefaultDeliveryAddresses(user_id) {
        const query = this.createQueryBuilder('deliver_address')
            .leftJoinAndSelect('deliver_address.user', 'user')
            .select([
            'deliver_address.id as id',
            'deliver_address.address1 as address1',
            'deliver_address.address2 as address2',
            'deliver_address.address3 as address3',
            'deliver_address.is_default as is_default',
        ])
            .where('user.id = :user_id', { user_id })
            .andWhere('deliver_address.is_default = :isDefault', { isDefault: true });
        const result = await query.getRawOne();
        return result;
    }
    async updateDefaultDeliverAddressByUserId(updateDeliverAddressDto) {
        const { id, user_id } = updateDeliverAddressDto;
        const query = this.createQueryBuilder('deliver_address').leftJoinAndSelect('deliver_address.user', 'user');
        await query
            .update()
            .set({ isDefault: false })
            .where('id != :id', { id })
            .andWhere('user.id = :user_id', { user_id })
            .execute();
        await query
            .update()
            .set({ isDefault: true })
            .where('id = :id', { id })
            .execute();
        return await query
            .select([
            'deliver_address.id as id',
            'deliver_address.address1 as address1',
            'deliver_address.address2 as address2',
            'deliver_address.address3 as address3',
            'deliver_address.is_default as is_default',
        ])
            .getRawMany();
    }
};
DeliverAddressRepository = __decorate([
    (0, typeorm_1.EntityRepository)(deliver_address_entity_1.DeliverAddress)
], DeliverAddressRepository);
exports.DeliverAddressRepository = DeliverAddressRepository;
//# sourceMappingURL=deliver-address.repository.js.map