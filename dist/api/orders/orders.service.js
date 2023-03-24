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
exports.OrdersService = void 0;
const numberWithCommas_1 = require("./../../common/utils/numberWithCommas");
const users_repository_1 = require("./../users/users.repository");
const products_repository_1 = require("./../products/products.repository");
const sms_service_1 = require("./../sms/sms.service");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const orders_repository_1 = require("./orders.repository");
const getByteLength_1 = require("../../common/utils/getByteLength");
let OrdersService = class OrdersService {
    constructor(ordersRepository, usersRepository, productsRepository, smsService) {
        this.ordersRepository = ordersRepository;
        this.usersRepository = usersRepository;
        this.productsRepository = productsRepository;
        this.smsService = smsService;
    }
    async createOrder(createOrderDto) {
        const { user_id, product_id } = createOrderDto;
        const user = await this.usersRepository.findOne({ id: user_id });
        const product = await this.productsRepository.findOne({ id: product_id });
        const order = this.ordersRepository.create(Object.assign(Object.assign({}, createOrderDto), { user,
            product }));
        const content = [
            '서와실 농원 상품 주문 완료.',
            '\n',
            '입금 정보: 352-0654-1560-03 농협(주민창)',
            '\n',
            `상품명: ${product.title}`,
            '\n',
            `주문 금액: ${(0, numberWithCommas_1.numberWithCommas)(order.price)}원`,
            '\n',
            `주문해 주셔서 감사합니다.`,
            '\n',
            `입금 완료 후 입금 완료 연락(문자/통화)을 주시면 감사하겠습니다.`,
        ].join('');
        const byteLength = (0, getByteLength_1.getByteLength)(content);
        const result = await this.smsService.sendSMS(createOrderDto.phoneNumber, content, byteLength);
        if (result)
            return await this.ordersRepository.save(order);
        else
            throw new common_1.HttpException('알 수 없는 오류로 인해 서비스가 제한되었습니다. 다시 수행해주세요.', common_1.HttpStatus.BAD_REQUEST);
    }
    async getOrderList() {
        const result = await this.ordersRepository.getOrderList();
        return result;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_repository_1.OrdersRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(products_repository_1.ProductsRepository)),
    __metadata("design:paramtypes", [orders_repository_1.OrdersRepository,
        users_repository_1.UsersRepository,
        products_repository_1.ProductsRepository,
        sms_service_1.SmsService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map