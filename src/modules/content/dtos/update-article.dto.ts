import { DtoValidationoOptions, IsModelExist } from '@/core';
import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { IsDefined, IsUUID } from 'class-validator';
import { Article } from '../entities';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
@DtoValidationoOptions({ skipMissingProperties: true, groups: ['update'] })
export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    // 在create组下必填
    @IsDefined({ groups: ['update'], message: '文章ID必须指定' })
    @IsUUID(undefined, { groups: ['update'], message: '文章ID格式错误' })
    @IsModelExist(Article, { groups: ['update'], message: '指定的文章不存在' })
    id!: string;
}
