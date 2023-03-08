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
exports.Cart = exports.PaymentStatus = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const common_entity_1 = require("../../../common/entities/common.entity");
const typeorm_1 = require("typeorm");
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["WAITING"] = "WAITING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["CANCELED"] = "CANCELED";
    PaymentStatus["FAILED"] = "FAILED";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
let Cart = class Cart extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', comment: '주문 수량', nullable: false }),
    __metadata("design:type", Number)
], Cart.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.WAITING }),
    __metadata("design:type", String)
], Cart.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.cart),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'product_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", product_entity_1.Product)
], Cart.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.cart, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'user_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", user_entity_1.User)
], Cart.prototype, "user", void 0);
Cart = __decorate([
    (0, typeorm_1.Entity)()
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=cart.entity.js.map