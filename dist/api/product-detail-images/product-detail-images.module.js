"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailImagesModule = void 0;
const s3_service_1 = require("../s3/s3.service");
const product_detail_images_respsitory_1 = require("./product-detail-images.respsitory");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const product_detail_images_controller_1 = require("./product-detail-images.controller");
const product_detail_images_service_1 = require("./product-detail-images.service");
let ProductDetailImagesModule = class ProductDetailImagesModule {
};
ProductDetailImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_detail_images_respsitory_1.ProductDetailImagesRepository])],
        controllers: [product_detail_images_controller_1.ProductDetailImagesController],
        providers: [product_detail_images_service_1.ProductDetailImagesService, s3_service_1.S3Service],
    })
], ProductDetailImagesModule);
exports.ProductDetailImagesModule = ProductDetailImagesModule;
//# sourceMappingURL=product-detail-images.module.js.map