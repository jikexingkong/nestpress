import { DtoValidationoOptions, IsModelExist } from '@/core';
import { Injectable } from '@nestjs/common';
import { IsDefined, IsNotEmpty, IsUUID, MaxLength } from 'class-validator';
import { Article } from '../entities';

@Injectable()
@DtoValidationoOptions()
export class CreateCommentDto {
    @IsNotEmpty({ message: '评论内容不能为空' })
    @MaxLength(1000, { message: '评论内容不能超过$constraint1个字' })
    body!: string;

    @IsDefined({ message: '评论文章ID必须指定' })
    @IsUUID(undefined, { message: '文章ID格式错误' })
    @IsModelExist(Article, { always: true, message: '指定的文章不存在' })
    article!: string;
}
