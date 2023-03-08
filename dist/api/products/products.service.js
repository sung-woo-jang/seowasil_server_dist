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
exports.ProductsService = void 0;
const categories_repository_1 = require("./../categories/categories.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const product_entity_1 = require("./entities/product.entity");
const product_images_repository_1 = require("../product-images/product-images.repository");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesRepository, productImageRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
        this.productImageRepository = productImageRepository;
    }
    async createProduct(createProductDto) {
        const category = await this.categoriesRepository.findOne({
            id: createProductDto.category_id,
        });
        const productImageUrl = await this.productImageRepository.findOne({
            id: createProductDto.productImage_id,
        });
        const product = await this.productsRepository.save(Object.assign(Object.assign({}, createProductDto), { category,
            productImageUrl }));
        return this.productsRepository.getProductDetail(product.id);
    }
    async getProductDetail(id) {
        return await this.productsRepository.getProductDetail(id);
    }
    async getProductList() {
        return await this.productsRepository.getProductList();
    }
    async updateProduct(updateProductDto, id) {
        const board = await this.productsRepository
            .createQueryBuilder('product')
            .update(product_entity_1.Product)
            .set(Object.assign({}, updateProductDto))
            .where('id = :id', { id })
            .execute();
        return board;
    }
    async deleteProduct(id) {
        return await this.productsRepository.delete(id);
    }
    async restoreProduct(id) {
        return await this.productsRepository.restore(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_repository_1.ProductsRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_repository_1.CategoriesRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(product_images_repository_1.ProductImageRepository)),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        categories_repository_1.CategoriesRepository,
        product_images_repository_1.ProductImageRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map