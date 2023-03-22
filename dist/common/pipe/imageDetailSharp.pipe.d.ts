/// <reference types="multer" />
import { PipeTransform } from '@nestjs/common';
export declare class ImageDetailSharpPipe implements PipeTransform<Array<Express.Multer.File>> {
    transform(files: Array<Express.Multer.File>): Promise<Express.Multer.File[]>;
}
