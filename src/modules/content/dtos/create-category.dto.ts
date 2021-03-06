import {
    DtoValidationoOptions,
    IsModelExist,
    IsTreeUnique,
    IsTreeUniqueExist,
} from '@/core';
import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsOptional, IsUUID, MaxLength } from 'class-validator';
import { Category } from '../entities';

@Injectable()
@DtoValidationoOptions({ groups: ['create'] })
export class CreateCategoryDto {
    // 在create组下必填
    @IsNotEmpty({ groups: ['create'], message: '分类名称不得为空' })
    @MaxLength(25, {
        always: true,
        message: '分类名称长度不能超过$constraint1',
    })
    @IsTreeUnique(
        { entity: Category },
        {
            groups: ['create'],
            message: '分类名称重复',
        },
    )
    @IsTreeUniqueExist(
        { entity: Category },
        {
            groups: ['update'],
            message: '分类名称重复',
        },
    )
    name!: string;

    // 在create组下必填
    @IsOptional({ always: true })
    @MaxLength(50, {
        always: true,
        message: '分类别名长度不能超过$constraint1',
    })
    @IsTreeUnique(
        { entity: Category },
        {
            groups: ['create'],
            message: '分类别名重复',
        },
    )
    @IsTreeUniqueExist(
        { entity: Category },
        {
            groups: ['update'],
            message: '分类别名重复',
        },
    )
    slug?: string;

    // 总是可选
    @IsOptional({ always: true })
    @IsUUID(undefined, { always: true, message: '分类ID格式不正确' })
    @IsModelExist(Category, { always: true, message: '父分类不存在' })
    parent?: string;
}
