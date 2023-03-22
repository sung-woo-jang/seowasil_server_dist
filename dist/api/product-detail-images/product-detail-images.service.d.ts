/// <reference types="multer" />
import { S3Service } from '../s3/s3.service';
import { ProductDetailImagesRepository } from './product-detail-images.respsitory';
export declare class ProductDetailImagesService {
    private productDetailImagesRepository;
    private s3Service;
    constructor(productDetailImagesRepository: ProductDetailImagesRepository, s3Service: S3Service);
    uploadProductThumbnailImage(files: Array<Express.Multer.File>): Promise<import("./entities/product-thumbnail.entity").ProductDetailImages>;
}
