/// <reference types="multer" />
import { ProductDetailImagesService } from './product-detail-images.service';
export declare class ProductDetailImagesController {
    private readonly productDetailImagesService;
    constructor(productDetailImagesService: ProductDetailImagesService);
    uploadProductThumbnailImage(files: Array<Express.Multer.File>): Promise<import("./entities/product-thumbnail.entity").ProductDetailImages>;
}
