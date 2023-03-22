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
exports.ProductDetailImagesController = void 0;
const skip_auth_decorator_1 = require("./../../common/decorators/skip-auth.decorator");
const imageDetailSharp_pipe_1 = require("../../common/pipe/imageDetailSharp.pipe");
const product_detail_images_service_1 = require("./product-detail-images.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
let ProductDetailImagesController = class ProductDetailImagesController {
    constructor(productDetailImagesService) {
        this.productDetailImagesService = productDetailImagesService;
    }
    async uploadProductThumbnailImage(files) {
        return await this.productDetailImagesService.uploadProductThumbnailImage(files);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    __param(0, (0, common_1.UploadedFiles)(imageDetailSharp_pipe_1.ImageDetailSharpPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductDetailImagesController.prototype, "uploadProductThumbnailImage", null);
ProductDetailImagesController = __decorate([
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.Controller)('product-detail-images'),
    __metadata("design:paramtypes", [product_detail_images_service_1.ProductDetailImagesService])
], ProductDetailImagesController);
exports.ProductDetailImagesController = ProductDetailImagesController;
//# sourceMappingURL=product-detail-images.controller.js.map