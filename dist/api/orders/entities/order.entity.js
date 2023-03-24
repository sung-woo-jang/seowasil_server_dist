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
exports.Order = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../../common/entities/common.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const class_transformer_1 = require("class-transformer");
let Order = class Order extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '주문자명', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '주문자 전화번호', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '배송 요청사항', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "deliveryRequest", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '우편번호', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "address1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '주소', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "address2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '상세주소', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "address3", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, typeorm_1.Column)({ type: 'integer', comment: '주문 수량', nullable: false }),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        comment: '주문 가격 (판매가격 * 주문 수량)',
        nullable: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.orders, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'user_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.order),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'product_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", product_entity_1.Product)
], Order.prototype, "product", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map