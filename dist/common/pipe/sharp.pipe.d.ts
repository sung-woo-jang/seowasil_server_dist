/// <reference types="multer" />
import { PipeTransform } from '@nestjs/common';
export declare class SharpPipe implements PipeTransform<Express.Multer.File, Promise<Express.Multer.File>> {
    transform(image: Express.Multer.File): Promise<Express.Multer.File>;
}
