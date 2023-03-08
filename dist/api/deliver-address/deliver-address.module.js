"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverAddressModule = void 0;
const users_repository_1 = require("./../users/users.repository");
const deliver_address_repository_1 = require("./deliver-address.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const deliver_address_service_1 = require("./deliver-address.service");
const deliver_address_controller_1 = require("./deliver-address.controller");
let DeliverAddressModule = class DeliverAddressModule {
};
DeliverAddressModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([deliver_address_repository_1.DeliverAddressRepository, users_repository_1.UsersRepository]),
        ],
        providers: [deliver_address_service_1.DeliverAddressService],
        controllers: [deliver_address_controller_1.DeliverAddressController],
    })
], DeliverAddressModule);
exports.DeliverAddressModule = DeliverAddressModule;
//# sourceMappingURL=deliver-address.module.js.map