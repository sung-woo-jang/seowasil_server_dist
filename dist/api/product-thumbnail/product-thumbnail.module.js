"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductThumbnailModule = void 0;
const s3_service_1 = require("./../s3/s3.service");
const product_thumbnail_respsitory_1 = require("./product-thumbnail.respsitory");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const product_thumbnail_controller_1 = require("./product-thumbnail.controller");
const product_thumbnail_service_1 = require("./product-thumbnail.service");
let ProductThumbnailModule = class ProductThumbnailModule {
};
ProductThumbnailModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_thumbnail_respsitory_1.ProductThumbnailRepository])],
        controllers: [product_thumbnail_controller_1.ProductThumbnailController],
        providers: [product_thumbnail_service_1.ProductThumbnailService, s3_service_1.S3Service],
    })
], ProductThumbnailModule);
exports.ProductThumbnailModule = ProductThumbnailModule;
//# sourceMappingURL=product-thumbnail.module.js.map