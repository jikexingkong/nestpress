import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { IsDefined, IsUUID } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

@Injectable()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    // 在create组下必填
    @IsDefined({ groups: ['update'] })
    @IsUUID(undefined, { groups: ['update'] })
    id!: string;
}
