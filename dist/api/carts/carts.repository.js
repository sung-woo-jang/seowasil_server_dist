"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsRepository = void 0;
const cart_entity_1 = require("./entities/cart.entity");
const typeorm_1 = require("typeorm");
let CartsRepository = class CartsRepository extends typeorm_1.Repository {
    async getCartDetail(id) {
        const result = await this.createQueryBuilder('cart')
            .leftJoinAndSelect('cart.product', 'product')
            .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
            .select([
            'cart.id',
            'cart.amount',
            'product.id',
            'product.title',
            'product.prevPrice',
            'product.sellPrice',
            'product.productImageUrl',
            'productImageUrl.storedFileName',
        ])
            .where('cart.paymentStatus = :status', {
            status: cart_entity_1.PaymentStatus.WAITING,
        })
            .andWhere('cart.id = :id', { id })
            .getOne();
        return result;
    }
    async getCartByUser(user_id) {
        const result = await this.createQueryBuilder('cart')
            .leftJoinAndSelect('cart.product', 'product')
            .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
            .leftJoinAndSelect('product.category', 'category')
            .leftJoinAndSelect('cart.user', 'user')
            .addSelect('true', 'is_selected')
            .select([
            'cart.id as id',
            'cart.amount as amount',
            'product.id',
            'product.title as title',
            'product.prevPrice as prev_Price',
            'product.sellPrice as sell_Price',
            'category.name as category',
            'productImageUrl.storedFileName as stored_File_Name',
            'true as is_selected',
        ])
            .where('cart.paymentStatus = :status', {
            status: cart_entity_1.PaymentStatus.WAITING,
        })
            .andWhere('user.id = :user_id', { user_id })
            .getRawMany();
        result.forEach((cart) => {
            cart.stored_file_name = cart.stored_file_name.split(',');
        });
        return result;
    }
};
CartsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(cart_entity_1.Cart)
], CartsRepository);
exports.CartsRepository = CartsRepository;
//# sourceMappingURL=carts.repository.js.map