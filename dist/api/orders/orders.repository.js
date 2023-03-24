"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
const order_entity_1 = require("./entities/order.entity");
const typeorm_1 = require("typeorm");
let OrdersRepository = class OrdersRepository extends typeorm_1.Repository {
    async createOrder(createOrderDto) {
        const result = await this.save(Object.assign({}, createOrderDto));
        return result;
    }
    async getOrderList() {
        const query = this.createQueryBuilder('order').leftJoinAndSelect('order.product', 'product');
        const result = await query
            .select([
            'order.id',
            'order.name',
            'order.phoneNumber',
            'order.deliveryRequest',
            'order.address1',
            'order.address2',
            'order.address3',
            'order.amount',
            'order.price',
            'product.title',
        ])
            .orderBy('order.createdAt', 'ASC')
            .getMany();
        return result;
    }
};
OrdersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(order_entity_1.Order)
], OrdersRepository);
exports.OrdersRepository = OrdersRepository;
//# sourceMappingURL=orders.repository.js.map