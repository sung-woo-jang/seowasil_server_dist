import { ProductDetailImages } from './entities/product-thumbnail.entity';
import { Repository } from 'typeorm';
export declare class ProductDetailImagesRepository extends Repository<ProductDetailImages> {
    registerDetailImagesUrl(imgurl: string[]): Promise<ProductDetailImages>;
}
